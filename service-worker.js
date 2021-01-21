self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('cache-sw').then((cache) => cache.add('/')));
  console.log('Installed!');
});
self.addEventListener("activate", () => {
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((response) => response ? response : fetch(e.request)));
});

//fon