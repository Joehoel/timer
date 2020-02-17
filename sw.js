/* eslint-disable no-restricted-globals */
const cacheName = 'V1';

self.addEventListener('install', async function() {
  const cache = await caches.open(cacheName);
  cache.addAll(['/index.html', '/styles.css', '/app.js']);
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(response =>
          caches.open(cacheName).then(cache => {
            cache.put(event.request.url, response.clone());
            return response;
          })
        );
      })
      .catch(error => {
        fetch(event.request).then(response =>
          caches.open(cacheName).then(cache => {
            cache.put(event.request.url, response.clone());
            return response;
          })
        );
      })
  );
});
