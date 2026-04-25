self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
  // não precisa cache agora
});
