const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = 3000
http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type': 'text/html'})
  if (req.url === '/') {
    const readStream = fs.createReadStream(path.join(__dirname, './index.html'))
    readStream.pipe(res)
    return
  }
  if (req.url.startsWith('/api')) {
    if (req.method === 'GET') {
      console.log(req.url)
      res.writeHead(200, {'Content-Type': 'text/json'})
      res.end(JSON.stringify({name: 'jtr'}))
      return
    }
    if (req.method === 'POST'){
      console.log(req.url, 'post===>')
      let post = ''
      req.on('data', chunk => {
        console.log('chunk=>', chunk.toString())
        post += chunk
      })
      req.on('end', () => {
        console.log('end', post.toString())
        res.end(post)
      })
      // res.end('post 123')
      return
    }
    res.end('hi 123')
    return
  }
  res.end('hello world')
}).listen(PORT, ()=> {
  console.log('http start at ' + PORT)
})