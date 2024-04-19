var cacheName = "Dhesi";
var filesToCache = [
  "./",
  "index.html",
  "bootstrap.min.css",
  "bootstrap.rtl.min.css",
  "metropolis.min.css",
  "remixicon.css",
  "swiper-bundle.min.css",
  "style.css",
  "bootstrap.bundle.min.js",
  "chatting-chat.js",
  "custom-swiper.js",
  "homescreen-popup.js",
  "location-map.js",
  "offcanvas-popup.js",
  "onload-modal.js",
  "otp.js",
  "route-map.js",
  "script.js",
  "swiper-bundle.min.js",
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
