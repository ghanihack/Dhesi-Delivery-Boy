var cacheName = "zomo";
var filesToCache = [
  "./",
  "./food-delivery-app/index.html",
  "./assets/css/vendors/bootstrap.min.css",
  "./assets/css/vendors/bootstrap.rtl.min.css",
  "./assets/css/vendors/metropolis.min.css",
  "./assets/css/vendors/remixicon.css",
  "./assets/css/vendors/swiper-bundle.min.css",
  "./assets/css/style.css",
  "./assets/js/bootstrap.bundle.min.js",
  "./assets/js/chatting-chat.js",
  "./assets/js/custom-swiper.js",
  "./assets/js/homescreen-popup.js",
  "./assets/js/location-map.js",
  "./assets/js/offcanvas-popup.js",
  "./assets/js/onload-modal.js",
  "./assets/js/otp.js",
  "./assets/js/route-map.js",
  "./assets/js/script.js",
  "./assets/js/swiper-bundle.min.js",
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