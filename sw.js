/* Euxenos – service worker de la web: solo enseña la página «Sin conexión» cuando no hay internet.
   No guarda páginas ni datos de nadie; solo la página de aviso, el logo y las fuentes.
   El panel (/panel/) tiene el suyo propio y no se ve afectado. */
var VERSION = 'euxenos-offline-v1';
var BASICOS = [
  '/offline.html',
  '/marca/euxenos-logo-griego.svg',
  '/vendor/fuentes/fuentes.css',
  '/vendor/fuentes/sora-latin-700-normal.woff2',
  '/vendor/fuentes/figtree-latin-400-normal.woff2',
  '/vendor/fuentes/figtree-latin-600-normal.woff2'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(VERSION).then(function (c) {
      return Promise.all(BASICOS.map(function (u) { return c.add(u).catch(function () {}); }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (ks) {
      return Promise.all(ks.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var r = e.request;
  if (r.method !== 'GET') return;
  var url = new URL(r.url);
  if (url.origin !== self.location.origin) return;

  // Al abrir una página sin internet: enseña «Sin conexión».
  if (r.mode === 'navigate') {
    e.respondWith(fetch(r).catch(function () { return caches.match('/offline.html'); }));
    return;
  }
  // Logo y fuentes de esa página: desde la copia guardada si no hay internet.
  if (BASICOS.indexOf(url.pathname) !== -1) {
    e.respondWith(caches.match(r).then(function (c) { return c || fetch(r); }));
  }
});
