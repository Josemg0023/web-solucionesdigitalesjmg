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
// El resto de la web se sirve igual que siempre.

const N8N_URL = 'https://erisproject.app.n8n.cloud/webhook/eris-meta';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === '/api/meta') return meta(request, env, ctx, url);
    return env.ASSETS.fetch(request);
  },
};

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
