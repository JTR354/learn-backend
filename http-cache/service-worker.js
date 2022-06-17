self.addEventListener("fetch", function (event) {
  var requestURL = new URL(event.request.url);
  if (requestURL.pathname === "/api/ref-data") {
    console.log(event.request.url, requestURL.pathname);

    event.respondWith(
      caches.open("mysite-dynamic").then(function (cache) {
        return cache.match(event.request).then(function (response) {
          return (
            response ||
            fetch(event.request).then(function (response) {
              cache.put(event.request, response.clone());
              return response;
            })
          );
        });
      })
    );
  }
});
