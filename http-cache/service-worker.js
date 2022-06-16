// this.addEventListener('fetch', (event) => {
//   console.log(event, 8e8)
//   if (/ref-data/.test(event.request.url)) {
//     console.log(event)
//   }
// })
// const putInCache = async (request, response) => {
//   const cache = await caches.open('v1');
//   await cache.put(request, response);
// };

// const cacheFirst = async ({ request, preloadResponsePromise }) => {
//   // First try to get the resource from the cache
//   const responseFromCache = await caches.match(request);
//   if (responseFromCache) {
//     return responseFromCache;
//   }

//   // Next try to use the preloaded response, if it's there
//   const preloadResponse = await preloadResponsePromise;
//   if (preloadResponse) {
//     console.info('using preload response', preloadResponse);
//     putInCache(request, preloadResponse.clone());
//     return preloadResponse;
//   }

//   // Next try to get the resource from the network
//   try {
//     const responseFromNetwork = await fetch(request);
//     // response may be used only once
//     // we need to save clone to put one copy in cache
//     // and serve second one
//     putInCache(request, responseFromNetwork.clone());
//     return responseFromNetwork;
//   } catch (error) {
//     // const fallbackResponse = await caches.match(fallbackUrl);
//     // if (fallbackResponse) {
//     //   return fallbackResponse;
//     // }
//     // when even the fallback response is not available,
//     // there is nothing we can do, but we must always
//     // return a Response object
//     return new Response('Network error happened', {
//       status: 408,
//       headers: { 'Content-Type': 'text/plain' },
//     });
//   }
// };

// const addResourcesToCache = async (resources) => {
//   const cache = await caches.open('v1');
//   await cache.addAll(resources);
// };


// const enableNavigationPreload = async () => {
//   if (self.registration.navigationPreload) {
//     // Enable navigation preloads!
//     await self.registration.navigationPreload.enable();
//   }
// };

// self.addEventListener('activate', (event) => {
//   event.waitUntil(enableNavigationPreload());
// });

self.addEventListener('install', (event) => {
  console.log(event, 'install')
  event.waitUntil(
    caches.open('v1').then(c => {
      return c.addAll(['/'])
    })
  )
});


// self.addEventListener('fetch', e => {
//   console.log(e, 123)
//   e.respondWith(
//     caches.match(e.request).then(res => {
//       if (res) {
//         console.log(res, 'res pre cache')
//       }
//       return res 
//     })
//   )
// })

// self.addEventListener('activated', e => {
//   console.log(e, 'ac')
//   console.log(caches.keys())
// })

// self.addEventListener('fetch', (event) => {
//   console.log(event, 7e7)
//   event.respondWith(
//     cacheFirst({
//       request: event.request,
//       preloadResponsePromise: event.preloadResponse,
//       // fallbackUrl: '/sw-test/gallery/myLittleVader.jpg',
//     })
//   );
// });


this.addEventListener('fetch', function(event) {
  console.log(event, 'fff')
  // event.respondWith(
  //   // magic goes here
  //   '{data: {number: 123}}'
  // );
  event.respondWith(Promise.resolve('123'))
});
console.log(this, 'this')