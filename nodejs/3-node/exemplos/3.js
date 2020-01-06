// debug
// node debug 3.js
let http = require("http")
debugger;
http.createServer( (req, res) => {
    let body = 'Olá mundo!!!'
    let tamanho_conteudo = body.length
    res.writeHead(200, {
        'Content-Type':'text/plain; charset=utf-8',
        'Content-Length': tamanho_conteudo
    })
    res.end(body)
} ).listen(3000)

console.log('Servidor rodando em http://127.0.0.1:3000')