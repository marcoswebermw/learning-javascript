const server = require('./server/server')

const porta = 8080
const endereco = 'localhost'

server.listen(porta, endereco, () => {
    console.log(`rodando no endereço ${endereco} na porta ${porta}`)
    console.log("Aperte CTRL-C para parar...")
})