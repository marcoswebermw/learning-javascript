// Pipe. Enviando um HTML para o servidor.
const fs = require('fs')
const http = require('http')

// Criando Servidor.
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
    const lerStream = fs.createReadStream('index.html', 'utf8')
    lerStream.pipe(res)
}).listen(3000)

console.log('Servidor executando em http://127.0.0.1:3000/')