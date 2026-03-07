self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('HerdLink Service Worker Installed');
});

self.addEventListener('fetch', (event) => {
  // Pass-through: Allow the app to talk to Google Sheets normally
  event.respondWith(fetch(event.request));
});