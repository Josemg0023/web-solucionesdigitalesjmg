/* Euxenos – service worker: solo avisos (no guarda nada en caché) */
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
