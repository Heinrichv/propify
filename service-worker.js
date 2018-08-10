var staticCacheName = 'prop-v0';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll([
        'manifest.json'
      ]);
    })
  );
});
self.addEventListener('activate', function (event) {
  console.log('ServiceWorker: Activate');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  if (event.request.url.indexOf('/browser-sync/') !== -1) {
    event.respondWith(fetch(event.request));
    return;
  }
});
