// export function register() {
//     if ('serviceWorker' in navigator) {
//         window.addEventListener('load', () => {
//             navigator.serviceWorker.register('../sw.js').then(registration => {
//                 console.log('SW registered: ', registration);
//             }).catch(registrationError => {
//                 console.log('SW registration failed: ', registrationError);
//             });
//         });
//     }
// }

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);
console.log(isLocalhost, "isLocalhost")
export function register(config) {
    // Ensure service workers are supported
    if ('serviceWorker' in navigator) {
        // Ensure the page is served over HTTPS or localhost
        if (process.env.NODE_ENV === 'production' || isLocalhost) {
            const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
            if (publicUrl.origin !== window.location.origin) {
                return;
            }

            window.addEventListener('load', () => {
                const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

                if (isLocalhost) {
                    checkValidServiceWorker(swUrl, config);
                } else {
                    registerValidSW(swUrl, config);
                }
            });
        }
    }
}

function registerValidSW(swUrl, config) {
    navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
            registration.onupdatefound = () => {
                // ... (code to handle updates to the service worker)
            };
        })
        .catch((error) => {
            console.error('Error during service worker registration:', error);
        });
}

function checkValidServiceWorker(swUrl, config) {
    fetch(swUrl, {
        headers: { 'Service-Worker': 'script' },
    })
        .then((response) => {
            console.log("checkValid?")
            // ... (code to check if the service worker is valid or needs to be updated)
        })
        .catch(() => {
            console.log('No internet connection. App is running in offline mode.');
        });
}

export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
            .then((registration) => {
                registration.unregister();
            })
            .catch((error) => {
                console.error(error.message);
            });
    }
}
