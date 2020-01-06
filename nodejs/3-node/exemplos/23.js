// Roteamento básico em nodejs.
const fs = require('fs')
const http = require('http')

http.createServer((req, res)=>{
    console.log(`URL requisitada: ${req.url}` )
    verificarRotas(req, res)
 }).listen(3000)

console.log('Servidor rodando em http://127.0.0.1/3000')

function verificarRotas(req, res){
    if (req.url === '/' || req.url === '/home'){
        res.writeHead(200, {'Content-Type': 'text/html;'})
        fs.createReadStream('index.html').pipe(res)
    } else if (req.url === '/sobre'){
        res.writeHead(200, {'Content-Type':'text/html'})
        fs.createReadStream('sobre.html').pipe(res)
    } else if (req.url === '/api'){
        res.writeHead(200, {'Content-Type':'application/json'})
        let objJSON = {
            nome: 'Messi',
            time: 'Barcelona',
            numero: 10
        }
        objJSON = JSON.stringify(objJSON)
        res.end(objJSON)
    } else {
        console.log('Erro 404. Página não encontrada.')
        res.writeHead(404, {'Content-Type':'text/html'})
        fs.createReadStream('404.html').pipe(res)
    }
}
