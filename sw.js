/* Cambia VERSION en cada despliegue: fuerza una caché nueva y limpia la anterior. */
const VERSION = '2026-08-24-tiza2';
const CACHE = 'barra-' + VERSION;
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-512-maskable.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const isDoc = req => {
  if (req.mode === 'navigate' || req.destination === 'document') return true;
  const path = new URL(req.url).pathname;
  return path.endsWith('/') || path.endsWith('.html');
};

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  /* La app: red primero. Así una versión nueva se ve al abrir con cobertura,
     y sin cobertura cae a la última guardada. */
  if (isDoc(e.request)) {
    e.respondWith(
      fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put('./index.html', copy)).catch(() => {});
        return res;
      }).catch(() => caches.match('./index.html').then(hit => hit || caches.match('./')))
    );
    return;
  }

  /* Todo lo demás —iconos, fuentes, media de ejercicios— caché primero:
     no cambia entre despliegues y tiene que estar disponible en el parque. */
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }))
  );
});
