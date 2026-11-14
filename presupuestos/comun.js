// Presupuestos Euxenos · funciones compartidas por la página del negocio y la del cliente.
// En esta demo el presupuesto viaja dentro del enlace (después de #), sin guardarse en ningún servidor.
(function (w) {
  'use strict';

  function euros(n) {
    return (Math.round((Number(n) || 0) * 100) / 100).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: 'always' }) + ' €';
  }
  function cant(n, u) {
    var x = Number(n) || 0;
    var t = x.toLocaleString('es-ES', { minimumFractionDigits: x % 1 ? 2 : 0, maximumFractionDigits: 2 });
    return t + (u ? ' ' + u : '');
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function fecha(iso) {
    var p = String(iso || '').split('-');
    return p.length === 3 ? p[2] + '/' + p[1] + '/' + p[0] : '';
  }
  function totales(d) {
    var base = 0;
    (d.partidas || []).forEach(function (x) { base += Math.round((Number(x.c) || 0) * (Number(x.p) || 0) * 100) / 100; });
    base = Math.round(base * 100) / 100;
    var iva = Math.round(base * (Number(d.iva) || 0)) / 100;
    return { base: base, iva: iva, total: Math.round((base + iva) * 100) / 100 };
  }

  // Codificar el presupuesto para el enlace (UTF-8 → base64 apto para URL)
  function codificar(d) {
    var bytes = new TextEncoder().encode(JSON.stringify(d));
    var bin = '';
    bytes.forEach(function (b) { bin += String.fromCharCode(b); });
    return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  function decodificar(t) {
    try {
      var b = String(t).replace(/-/g, '+').replace(/_/g, '/');
      while (b.length % 4) b += '=';
      var bin = atob(b), bytes = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      return JSON.parse(new TextDecoder().decode(bytes));
    } catch (e) { return null; }
  }

  // HTML del documento (el mismo para la pantalla, el PDF y la vista previa del negocio)
  function documento(d, opciones) {
    opciones = opciones || {};
    var t = totales(d), e = d.emp || {}, c = d.cli || {};
    var filas = (d.partidas || []).map(function (x) {
      var importe = Math.round((Number(x.c) || 0) * (Number(x.p) || 0) * 100) / 100;
      var precio = Number(x.p) ? euros(x.p) : 'incluido';
      return '<tr><td><b>' + esc(x.t) + '</b>' + (x.d ? '<small>' + esc(x.d) + '</small>' : '') + '</td>' +
        '<td class="n" data-e="Cantidad">' + cant(x.c, x.u) + '</td>' +
        '<td class="n" data-e="Precio">' + precio + '</td>' +
        '<td class="n" data-e="Importe">' + euros(importe) + '</td></tr>';
    }).join('');
    var cond = (d.cond || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('');
    var color = /^#[0-9a-f]{6}$/i.test(e.color || '') ? e.color : '#1f6f5c';
    return '' +
      '<article class="doc" style="--marca:' + color + '">' +
      '<header class="doc-cab"><div class="doc-logo"><div class="doc-inicial">' + esc((e.inicial || e.nombre || '?').charAt(0)) + '</div>' +
      '<div><b>' + esc(e.nombre) + '</b><small>' + esc(e.sub) + (e.contacto ? '<br>' + esc(e.contacto) : '') + '</small></div></div>' +
      '<div class="doc-num"><h1>PRESUPUESTO</h1><div>Nº ' + esc(d.n) + '</div><div>Fecha: ' + fecha(d.f) + ' · Válido ' + (Number(d.v) || 30) + ' días</div>' +
      (d.demo ? '<span class="doc-demo">EJEMPLO · empresa y datos inventados</span>' : '') + '</div></header>' +
      '<div class="doc-bloques"><div><h3>Cliente</h3>' + esc(c.nombre) + (c.dir ? '<br>' + esc(c.dir) : '') + (c.via ? '<small>' + esc(c.via) + '</small>' : '') + '</div>' +
      '<div><h3>Visita y medidas</h3>' + esc(d.medidas || 'Medidas facilitadas por el cliente.') + '<small>Se confirman en la visita previa (sin coste) antes de empezar.</small></div></div>' +
      (d.trabajo ? '<p class="doc-trabajo"><b>Trabajo:</b> ' + esc(d.trabajo) + '</p>' : '') +
      '<table class="doc-tabla"><thead><tr><th>Partida</th><th class="n">Cantidad</th><th class="n">Precio</th><th class="n">Importe</th></tr></thead><tbody>' + filas + '</tbody></table>' +
      '<div class="doc-totales"><div><span>Base imponible</span><span>' + euros(t.base) + '</span></div>' +
      '<div><span>IVA ' + (Number(d.iva) || 0) + ' %</span><span>' + euros(t.iva) + '</span></div>' +
      '<div class="doc-total"><span>TOTAL</span><span>' + euros(t.total) + '</span></div></div>' +
      (cond ? '<section class="doc-cond"><h3>Condiciones</h3><ul>' + cond + '</ul></section>' : '') +
      (opciones.enlace ? '<a class="doc-aceptar" href="' + esc(opciones.enlace) + '"><span class="doc-btn">Ver y aceptar presupuesto</span><span>Pulsa para abrirlo en el móvil o el ordenador y aceptarlo. Si tienes dudas, contesta al mismo WhatsApp.</span></a>' : '') +
      '<footer class="doc-pie"><span>Preparado por Eris (asistente de ' + esc(e.nombre) + ') · revisado y aprobado por la empresa antes de enviarse</span></footer>' +
      '</article>';
  }

  // Ejemplo genérico (vale para cualquier sector): negocio inventado con conceptos típicos
  var DEMO_TARIFA = [
    { id: 'visita', t: 'Visita y valoración previa', d: 'Revisión en el sitio y toma de medidas o datos.', u: 'ud', p: 35 },
    { id: 'mo', t: 'Mano de obra', d: 'Trabajo del equipo, por hora.', u: 'h', p: 38 },
    { id: 'mat', t: 'Materiales', d: 'Material necesario según el trabajo, a precio de tarifa.', u: 'ud', p: 120 },
    { id: 'serv', t: 'Servicio estándar', d: 'Servicio habitual del negocio, precio por unidad.', u: 'ud', p: 55 },
    { id: 'urg', t: 'Suplemento de urgencia', d: 'Atención en menos de 24 horas.', u: 'ud', p: 30 },
    { id: 'desp', t: 'Desplazamiento', d: 'Hasta 20 km desde el local.', u: 'ud', p: 20 },
    { id: 'garantia', t: 'Garantía ampliada', d: 'Un año de garantía sobre el trabajo realizado.', u: 'ud', p: 40 },
    { id: 'limpieza', t: 'Limpieza y retirada de restos', d: '', u: '', p: 40 }
  ];
  var DEMO_EMPRESA = {
    nombre: 'Servicios Ejemplo', sub: 'Tu negocio, tu tarifa, tu marca',
    contacto: 'Talavera de la Reina · 600 00 00 00 · info@ejemplo.es', color: '#1f6f5c', inicial: 'S'
  };
  var DEMO_COND = [
    'Plazo de ejecución: según agenda, una vez aceptado el presupuesto.',
    'Forma de pago: 30 % al aceptar y el resto al terminar, por transferencia, Bizum o tarjeta.',
    'No incluye trabajos ni materiales no descritos. Cualquier cambio se presupuesta aparte antes de hacerlo.',
    'Las medidas y datos se confirman en la visita previa; si cambian, se ajusta el importe y se envía de nuevo para su aceptación.'
  ];
  // Lo que Eris recogió por WhatsApp (borrador inicial)
  var DEMO_SOLICITUD = {
    cli: { nombre: 'Laura Martín', dir: 'C/ Ejemplo 14, 3.º B · Talavera de la Reina', via: 'Contacto: WhatsApp · 26/10/2026, 21:47', tel: '' },
    trabajo: 'Trabajo a domicilio de ejemplo: visita previa, mano de obra, materiales y limpieza final.',
    medidas: 'Datos facilitados por el cliente con fotos.',
    resumen: [
      'Pide un presupuesto para un trabajo en su casa y manda fotos.',
      'Quiere saber el precio antes de decidir y si puede ser esta semana.',
      'Vive en C/ Ejemplo 14, 3.º B. Prefiere que la visita sea por la tarde.'
    ],
    partidas: [
      { id: 'visita', c: 1, d: 'Revisión en el sitio y toma de medidas.' },
      { id: 'mo', c: 6, d: 'Trabajo estimado en 6 horas.' },
      { id: 'mat', c: 1, d: 'Material necesario según lo visto en las fotos.' },
      { id: 'desp', c: 1 },
      { id: 'limpieza', c: 1 }
    ]
  };

  w.Presu = {
    euros: euros, cant: cant, esc: esc, fecha: fecha, totales: totales,
    codificar: codificar, decodificar: decodificar, documento: documento,
    DEMO_TARIFA: DEMO_TARIFA, DEMO_EMPRESA: DEMO_EMPRESA, DEMO_COND: DEMO_COND, DEMO_SOLICITUD: DEMO_SOLICITUD
  };
})(window);
