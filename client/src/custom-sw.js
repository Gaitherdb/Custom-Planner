

import { clientsClaim } from 'workbox-core';
import { skipWaiting } from 'workbox-core';

clientsClaim();
skipWaiting();
// src/custom-sw.js
self.addEventListener('install', function (event) {
    // Perform install steps
});

self.addEventListener('fetch', function (event) {
    // Handle fetch events
});

// Put your code here to handle IndexedDB operations