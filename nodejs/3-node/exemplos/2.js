// node 2.js
const http = require("http")

http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end("Hello World!\n")
}).listen(3000)

console.log("Server rodando em http://127.0.0.1:3000/")