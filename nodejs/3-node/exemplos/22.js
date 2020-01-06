// Pipe. Enviando um arquivo JSON para o servidor.
const fs = require('fs')
const http = require('http')

// Criando Servidor.
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'application/json'})
    
    let objJSON = {
        nome : 'Messi',
        time : 'Barcelona',
        numero: 10
    }

    // Transformando em um stream.
    objJSON = JSON.stringify(objJSON)

    res.end(objJSON)

}).listen(3000)

console.log('Servidor executando em http://127.0.0.1:3000/')