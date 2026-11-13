/* Euxenos – service worker del panel: avisos, y página «Sin conexión» si no hay internet (no guarda datos de nadie) */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });

self.addEventListener('push', function (e) {
  var d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = { texto: e.data ? e.data.text() : '' }; }
  var opciones = {
    body: d.texto || '',
    icon: 'icono-192.png',
    badge: 'icono-192.png',
    data: { url: d.url || '/panel/' }
  };
  if (d.tag) { opciones.tag = d.tag; opciones.renotify = true; }
  e.waitUntil(Promise.all([
    self.registration.showNotification(d.titulo || 'Euxenos', opciones),
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (cs) {
      cs.forEach(function (c) { c.postMessage({ tipo: 'eris-actualizar' }); });
    })
  ]));
});

self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var url = new URL((e.notification.data && e.notification.data.url) || '/panel/', self.location.origin).href;
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (cs) {
    for (var i = 0; i < cs.length; i++) {
      if (cs[i].url.indexOf(self.location.origin + '/panel') === 0 && 'focus' in cs[i]) {
        cs[i].postMessage({ tipo: 'eris-actualizar' });
        return cs[i].focus();
      }
    }
    return self.clients.openWindow(url);
  }));
});

// Sin internet al abrir el panel: se enseña la misma página «Sin conexión» de la web
// (la guarda /sw.js al visitar euxenos.com). Si no está guardada, el navegador muestra su aviso de siempre.
function limpia(resp) {
  if (!resp || !resp.redirected) return resp;
  return resp.blob().then(function (b) {
    return new Response(b, { status: 200, statusText: 'OK', headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  });
}
self.addEventListener('fetch', function (e) {
  var r = e.request;
  if (r.method !== 'GET' || r.mode !== 'navigate') return;
  e.respondWith(fetch(r).catch(function (err) {
    return caches.match('/offline.html').then(function (c) {
      if (!c) throw err;
      return limpia(c);
    });
  }));
});
