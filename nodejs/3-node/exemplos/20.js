// Pipe. Escrevendo no servidor.
const fs = require('fs')
const http = require('http')


http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})
    const lerStream = fs.createReadStream('arquivo.txt', 'utf8')
    // Mandando o conteúdo do arquivo como resposta para o servidor.
    lerStream.pipe(res)
    
}).listen(3000)

console.log('Servidor rodando em http://127.0.0.1:3000/')