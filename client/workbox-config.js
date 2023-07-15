module.exports = {
    "globDirectory": "build/",
    "globPatterns": [
        "**/*.{json,ico,html,js,css,png}"
    ],
    "swDest": "build/sw.js",
    "navigateFallback": "/index.html",
    "clientsClaim": true,
    "skipWaiting": true,
    "runtimeCaching": [
        {
            "urlPattern": "/graphql",
            "handler": 'NetworkFirst',
            "options": {
                "cacheName": "api"
            }
        }
    ]
};