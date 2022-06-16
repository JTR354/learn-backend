const http = require("http");
const fs = require("fs");
const path = require("path");

http
.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const rs = fs.createReadStream(path.join(__dirname, "./index.html"));
    rs.pipe(res);
    return;
  }
  if (/\.js$/.test(req.url)) {
    console.log(req.url, 'url')
    res.writeHead(200, {'Content-Type': 'text/javascript'})
    const rs = fs.createReadStream(path.join(__dirname, req.url))
    rs.pipe(res)
    return;
  }
  if (req.url.startsWith("/api")) {
      // res.writeHead(200, { "Content-Type": "text/json", 'Cache-Control': 'max-age=3000' });
    res.writeHead(200, { "Content-Type": "text/json" });
      res.end(
        JSON.stringify({
          data: { number: Math.random().toString(36).slice(2) },
        })
      );
      return;
    }
    res.end("hello world");
  })
  .listen(3000, () => {
    console.log(`port at 3000`);
  });
