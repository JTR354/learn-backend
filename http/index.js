const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = 8080
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
      res.writeHead(200, {'Content-Type': 'text/json', 'Access-Control-Allow-Origin': 'http://localhost:3000'})
      // res.end(JSON.stringify({name: 'jtr'}))
      const data = JSON.stringify({
        data: { number: Math.random().toString(36).slice(2) },
      })
      res.end(data)
      return
    }
    if (req.method === 'POST' && req.url === '/api/post') {
      let post = ''
      req.on('data', chunk => {
        post += chunk
      })
      req.on('end', () => {
        fs.writeFileSync('./dist/file.txt', post)
        res.end('successfully')
      })

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