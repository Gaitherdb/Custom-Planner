import { precacheAndRoute } from 'workbox-precaching';

// Add your own assets to the precache manifest
precacheAndRoute(self.__WB_MANIFEST);