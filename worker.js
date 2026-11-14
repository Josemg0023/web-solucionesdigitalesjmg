// Puerta de entrada de Meta (WhatsApp e Instagram) para Eris.
// Meta envía aquí los mensajes; este filtro comprueba que vienen de Meta de verdad,
// descarta los avisos que no son mensajes (entregado, leído, ecos...) y reenvía
// solo los mensajes a n8n. Así se ahorran ejecuciones de n8n.
//
// Secretos (los pone Tete en Cloudflare → euxenos → Ajustes → Variables y secretos):
//   META_VERIFY_TOKEN  palabra inventada que también se escribe en Meta al configurar el webhook
//   META_APP_SECRET    «Clave secreta de la app» de Meta (Configuración de la app → Básica)
//   META_IG_APP_SECRET «Clave secreta de la aplicación de Instagram» (caso de uso de Instagram → Configuración de la API)
//   N8N_KEY            clave inventada; la misma que la credencial «Clave filtro Meta» de n8n
//   DEMO_CODIGO        código para hablar con Eris en las demostraciones (14/11). Sin él, el chat de las demos queda cerrado.
// El resto de la web se sirve igual que siempre.

const N8N_URL = 'https://erisproject.app.n8n.cloud/webhook/eris-meta';

import { EmailMessage } from 'cloudflare:email';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === '/api/meta') return meta(request, env, ctx, url);
    if (url.pathname === '/api/demo-acceso') return demoAcceso(request, env);
    if (url.pathname === '/api/demo-eris') return demoEris(request, env);
    return env.ASSETS.fetch(request);
  },
  // Vigía externo (05/11): si se cae n8n, el Vigía de dentro de n8n no puede avisar. Esto vive fuera.
  async scheduled(event, env, ctx) {
    ctx.waitUntil(vigilarN8n(env, new Date(event.scheduledTime || Date.now())));
  },
};

// ── Vigía externo de n8n ────────────────────────────────────────────────────
// Cada 10 min: n8n responde (/healthz, no gasta ejecuciones).
// Cada 6 h (00, 06, 12 y 18 UTC): un flujo publicado contesta de verdad (avisos de la voz, sin IA; 4 ejecuciones/día).
// Si falla dos veces seguidas, email a Tete (como mucho uno cada 3 h; si la caché no está disponible, uno cada 30 min).
const N8N_SALUD = 'https://erisproject.app.n8n.cloud/healthz';
const N8N_FLUJO = 'https://erisproject.app.n8n.cloud/webhook/eris-avisos-voz';

// Ojo: n8n contesta 200 incluso en direcciones que no existen, así que se mira también el contenido.
async function comprobar(url, conCuerpo) {
  try {
    const r = await fetch(url, { cf: { cacheTtl: 0 }, signal: AbortSignal.timeout(15000) });
    if (!r.ok) return 'respondió ' + r.status;
    const j = await r.json().catch(() => null);
    if (conCuerpo) { if (!j || typeof j.avisos !== 'string') return 'respuesta rara'; }
    else if (!j || j.status !== 'ok') return 'no dice que esté bien';
    return '';
  } catch (e) { return 'no responde (' + String(e && e.name || e) + ')'; }
}

async function vigilarN8n(env, ahora) {
  const flujoTambien = ahora.getUTCHours() % 6 === 0 && ahora.getUTCMinutes() < 10;
  let fallo = await comprobar(N8N_SALUD, false);
  if (!fallo && flujoTambien) { const f = await comprobar(N8N_FLUJO, true); if (f) fallo = 'los flujos publicados no contestan: ' + f; }
  if (!fallo) return;
  // Segunda oportunidad a los 30 s (un fallo suelto de red no es una caída)
  await new Promise(r => setTimeout(r, 30000));
  let otra = await comprobar(N8N_SALUD, false);
  if (!otra && fallo.startsWith('los flujos')) { const f = await comprobar(N8N_FLUJO, true); otra = f ? 'los flujos publicados no contestan: ' + f : ''; }
  if (!otra) return;
  if (!(await tocaAvisar(ahora))) return;
  await avisar(env, otra, ahora);
}

async function tocaAvisar(ahora) {
  const clave = new Request('https://euxenos.com/__vigia/ultimo-aviso');
  try {
    const c = caches.default;
    if (await c.match(clave)) return false;
    await c.put(clave, new Response('1', { headers: { 'Cache-Control': 'max-age=10800' } }));
    return true;
  } catch (e) {
    return ahora.getUTCMinutes() % 30 < 10;
  }
}

function b64(t) { const b = new TextEncoder().encode(t); let s = ''; b.forEach(x => { s += String.fromCharCode(x); }); return btoa(s); }

async function avisar(env, motivo, ahora) {
  if (!env.AVISOS) return;
  const hora = ahora.toLocaleString('es-ES', { timeZone: 'Europe/Madrid', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
  const texto = [
    'n8n no funciona: ' + motivo + '.',
    'Hora: ' + hora + '.',
    '',
    'Mientras dure, Eris no contesta en WhatsApp, Instagram ni el chat de la web, y no llegan las citas ni los pagos a HubSpot.',
    'El teléfono (919) sigue funcionando porque va por ElevenLabs.',
    '',
    'Qué hacer:',
    '1. Entra en erisproject.app.n8n.cloud y mira si la cuenta está activa (pago del plan Starter, ejecuciones del mes).',
    '2. Mira https://status.n8n.io por si es una caída general de n8n.',
    '3. Pásale este email a Claude en un chat.',
    '',
    'Mientras siga caído, te llegará como mucho un aviso cada 3 horas.',
  ].join('\r\n');
  const raw = [
    'From: =?UTF-8?B?' + b64('Vigía · Euxenos') + '?= <avisos@euxenos.com>',
    'To: soluciones.digitales.jmg@gmail.com',
    'Subject: =?UTF-8?B?' + b64('Vigía · n8n no funciona') + '?=',
    'Message-ID: <vigia-' + ahora.getTime() + '@euxenos.com>',
    'Date: ' + ahora.toUTCString(),
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    b64(texto).replace(/.{76}/g, '$&\r\n'),
  ].join('\r\n');
  try { await env.AVISOS.send(new EmailMessage('avisos@euxenos.com', 'soluciones.digitales.jmg@gmail.com', raw)); }
  catch (e) { console.error('Vigía: no se pudo enviar el aviso', e); }
}

async function meta(request, env, ctx, url) {
  // 1) Verificación del webhook (Meta lo hace una vez al configurarlo)
  if (request.method === 'GET') {
    const ok = url.searchParams.get('hub.mode') === 'subscribe'
      && env.META_VERIFY_TOKEN
      && url.searchParams.get('hub.verify_token') === env.META_VERIFY_TOKEN;
    return ok
      ? new Response(url.searchParams.get('hub.challenge') || '', { status: 200 })
      : new Response('Forbidden', { status: 403 });
  }
  if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

  const crudo = await request.text();
  if (crudo.length > 200000) return new Response('Too Large', { status: 413 });

  // 2) Firma de Meta: sin secreto configurado o con firma mala, no pasa nada a n8n.
  //    WhatsApp firma con META_APP_SECRET; Instagram (inicio de sesión con Instagram) con META_IG_APP_SECRET.
  const firma = request.headers.get('x-hub-signature-256');
  const secretos = [env.META_APP_SECRET, env.META_IG_APP_SECRET].filter(Boolean);
  let valida = false;
  for (const s of secretos) if (await firmaValida(crudo, firma, s)) { valida = true; break; }
  if (!valida) return new Response('Forbidden', { status: 403 });

  let cuerpo;
  try { cuerpo = JSON.parse(crudo); } catch (e) { return new Response('OK'); }

  // 3) Quedarse solo con mensajes de clientes
  const mensajes = filtrar(cuerpo);
  if (mensajes.length && env.N8N_KEY) {
    ctx.waitUntil(fetch(N8N_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-eux-key': env.N8N_KEY },
      body: JSON.stringify({ mensajes }),
    }).catch(() => {}));
  }
  // Meta necesita un 200 rápido; si no, reintenta
  return new Response('OK', { status: 200 });
}

function filtrar(cuerpo) {
  const salida = [];
  const entradas = Array.isArray(cuerpo && cuerpo.entry) ? cuerpo.entry : [];

  if (cuerpo.object === 'whatsapp_business_account') {
    for (const e of entradas) for (const c of (e.changes || [])) {
      const v = c.value || {};
      if (c.field !== 'messages' || !Array.isArray(v.messages)) continue; // estados (enviado, leído) fuera
      const nombres = {};
      for (const ct of (v.contacts || [])) nombres[ct.wa_id] = (ct.profile && ct.profile.name) || '';
      for (const m of v.messages) {
        salida.push({
          canal: 'WhatsApp',
          de: m.from,
          nombre: nombres[m.from] || '',
          id: m.id,
          tipo: m.type,
          texto: textoWhatsApp(m),
          boton: botonWhatsApp(m),
          cuenta: (v.metadata && v.metadata.phone_number_id) || '',
          hora: Number(m.timestamp) || 0,
          // Audios y notas de voz: n8n descarga el archivo con este id y lo transcribe
          media: (m.type === 'audio' && m.audio && m.audio.id) || '',
          // Fotos (12/11): n8n descarga la imagen con este id y Gemini describe lo que se ve
          imagen: (m.type === 'image' && m.image && m.image.id) || '',
        });
      }
    }
  } else if (cuerpo.object === 'instagram') {
    // Comentarios en publicaciones (para «comenta INFO»): n8n decide si contestar por privado
    for (const e of entradas) for (const c of (e.changes || [])) {
      const v = c.value || {};
      if (c.field !== 'comments' || !v.id || !v.from || !v.from.id) continue;
      if (e.id && v.from.id === e.id) continue; // comentarios de la propia cuenta
      if (v.parent_id) continue; // respuestas a otros comentarios
      salida.push({
        canal: 'Instagram',
        de: v.from.id,
        nombre: v.from.username || '',
        id: 'comentario_' + v.id,
        tipo: 'comentario',
        texto: String(v.text || '').slice(0, 500),
        boton: '',
        cuenta: e.id || '',
        hora: Math.floor(Date.now() / 1000),
        comentario: v.id,
      });
    }
    for (const e of entradas) for (const ev of (e.messaging || [])) {
      const m = ev.message;
      if (!m || m.is_echo || m.is_deleted || m.is_unsupported) continue; // ecos y avisos fuera
      if (ev.sender && e.id && ev.sender.id === e.id) continue; // lo que envía la propia cuenta
      const a0 = Array.isArray(m.attachments) && m.attachments.length ? m.attachments[0] : null;
      const adj = a0 ? a0.type : '';
      salida.push({
        canal: 'Instagram',
        de: ev.sender && ev.sender.id,
        nombre: '',
        id: m.mid,
        tipo: m.text ? 'text' : (adj || 'otro'),
        texto: m.text || '',
        boton: (m.quick_reply && m.quick_reply.payload) || '',
        cuenta: e.id || '',
        hora: Math.floor((Number(ev.timestamp) || 0) / 1000),
        // Notas de voz de Instagram: n8n descarga el audio desde esta dirección y lo transcribe
        media_url: (adj === 'audio' && a0.payload && a0.payload.url) || '',
        // Fotos de Instagram (12/11): n8n descarga la imagen desde esta dirección y Gemini describe lo que se ve
        imagen_url: (adj === 'image' && a0.payload && a0.payload.url) || '',
        // Respuesta a una historia de @euxenos.ai: n8n se lo dice a Eris para que sepa de qué le hablan
        historia: !!(m.reply_to && m.reply_to.story),
      });
    }
  }
  return salida.filter(x => x.de && x.id).slice(0, 20);
}

function textoWhatsApp(m) {
  switch (m.type) {
    case 'text': return (m.text && m.text.body) || '';
    case 'button': return (m.button && m.button.text) || '';
    case 'interactive': {
      const i = m.interactive || {};
      return (i.button_reply && i.button_reply.title) || (i.list_reply && i.list_reply.title) || '';
    }
    case 'image': case 'video': case 'document': return (m[m.type] && m[m.type].caption) || '';
    default: return '';
  }
}

function botonWhatsApp(m) {
  if (m.type === 'interactive') {
    const i = m.interactive || {};
    return (i.button_reply && i.button_reply.id) || (i.list_reply && i.list_reply.id) || '';
  }
  if (m.type === 'button') return (m.button && m.button.payload) || '';
  return '';
}

async function firmaValida(crudo, cabecera, secreto) {
  if (!cabecera || !cabecera.startsWith('sha256=')) return false;
  const clave = await crypto.subtle.importKey('raw', new TextEncoder().encode(secreto), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const firma = new Uint8Array(await crypto.subtle.sign('HMAC', clave, new TextEncoder().encode(crudo)));
  const hex = Array.from(firma, b => b.toString(16).padStart(2, '0')).join('');
  const dada = cabecera.slice(7).toLowerCase();
  if (dada.length !== hex.length) return false;
  let dif = 0;
  for (let i = 0; i < hex.length; i++) dif |= hex.charCodeAt(i) ^ dada.charCodeAt(i);
  return dif === 0;
}

// ── Código de las demostraciones (14/11, Tete) ──────────────────────────────
// Las demos se ven libremente, pero para hablar con Eris hace falta el código (secreto DEMO_CODIGO).
// El código nunca está en la web ni en el repositorio: lo comprueba este worker.
// Si es correcto, deja una cookie firmada 30 días. El chat de las demos ya no llama a n8n directamente:
// pasa por /api/demo-eris, que solo reenvía si la cookie es buena y el negocio es uno de los de demostración.
const DEMO_NEGOCIOS = ['demo-peluqueria', 'demo-taller', 'demo-restaurante', 'demo-tatuajes'];
const ERIS_NEGOCIO = 'https://erisproject.app.n8n.cloud/webhook/eris-negocio';
const DEMO_DIAS = 30;
const DEMO_INTENTOS = 8; // fallos por IP cada 15 min

function jsonResp(obj, status, extra) {
  return new Response(JSON.stringify(obj), { status: status || 200, headers: Object.assign({ 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }, extra || {}) });
}

async function hmacHex(clave, texto) {
  const k = await crypto.subtle.importKey('raw', new TextEncoder().encode(clave), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const f = await crypto.subtle.sign('HMAC', k, new TextEncoder().encode(texto));
  return [...new Uint8Array(f)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function iguales(a, b) {
  if (a.length !== b.length) return false;
  let d = 0; for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

async function demoTokenValido(request, env) {
  if (!env.DEMO_CODIGO) return false;
  const m = (request.headers.get('Cookie') || '').match(/(?:^|;\s*)demo_acceso=(\d+)\.([0-9a-f]{64})/);
  if (!m || Number(m[1]) < Date.now()) return false;
  return iguales(m[2], await hmacHex(env.DEMO_CODIGO, 'demo|' + m[1]));
}

async function demoFallos(ip, sumar) {
  const clave = new Request('https://euxenos.com/__demo/fallos/' + encodeURIComponent(ip));
  try {
    const c = caches.default;
    const r = await c.match(clave);
    let n = r ? Number(await r.text()) || 0 : 0;
    if (sumar) { n++; await c.put(clave, new Response(String(n), { headers: { 'Cache-Control': 'max-age=900' } })); }
    return n;
  } catch (e) { return 0; }
}

async function demoAcceso(request, env) {
  if (request.method === 'GET') return jsonResp({ ok: await demoTokenValido(request, env) });
  if (request.method !== 'POST') return jsonResp({ ok: false }, 405);
  if (!env.DEMO_CODIGO) return jsonResp({ ok: false, motivo: 'Las demostraciones están cerradas ahora mismo.' }, 503);
  const ip = request.headers.get('CF-Connecting-IP') || 'x';
  if (await demoFallos(ip, false) >= DEMO_INTENTOS) return jsonResp({ ok: false, motivo: 'Demasiados intentos. Prueba otra vez dentro de un rato.' }, 429);
  let j = null; try { j = await request.json(); } catch (e) {}
  const codigo = String((j && j.codigo) || '').replace(/\s+/g, '').slice(0, 64);
  const ok = codigo && iguales(await hmacHex('demo-comparar', codigo), await hmacHex('demo-comparar', String(env.DEMO_CODIGO).trim()));
  if (!ok) { await demoFallos(ip, true); return jsonResp({ ok: false, motivo: 'Ese código no es correcto.' }, 403); }
  const hasta = Date.now() + DEMO_DIAS * 86400000;
  const cookie = 'demo_acceso=' + hasta + '.' + (await hmacHex(env.DEMO_CODIGO, 'demo|' + hasta)) + '; Max-Age=' + (DEMO_DIAS * 86400) + '; Path=/; Secure; HttpOnly; SameSite=Lax';
  return jsonResp({ ok: true }, 200, { 'Set-Cookie': cookie });
}

async function demoEris(request, env) {
  if (request.method !== 'POST') return jsonResp({ ok: false }, 405);
  if (!(await demoTokenValido(request, env))) return jsonResp({ ok: false, sinAcceso: true, motivo: 'Hace falta el código de acceso.' }, 401);
  let j = null; try { j = await request.json(); } catch (e) {}
  if (!j || !DEMO_NEGOCIOS.includes(j.negocio)) return jsonResp({ ok: false, motivo: 'Negocio no válido.' }, 400);
  const mensaje = String(j.mensaje || '').slice(0, 2000);
  const sesion = String(j.sesion || '').replace(/[^\w-]/g, '').slice(0, 64);
  if (!mensaje.trim() || !sesion) return jsonResp({ ok: false, motivo: 'Mensaje vacío.' }, 400);
  try {
    const r = await fetch(ERIS_NEGOCIO, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ negocio: j.negocio, sesion, mensaje, canal: 'web' }), signal: AbortSignal.timeout(65000) });
    return new Response(await r.text(), { status: r.ok ? 200 : 502, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });
  } catch (e) { return jsonResp({ ok: false, motivo: 'Eris no ha podido contestar ahora mismo. Prueba otra vez en un momento.' }, 504); }
}
