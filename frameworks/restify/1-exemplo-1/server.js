const restify = require('restify')

const server = restify.createServer(
    {
        name: "meu-servidor",
        version: "1.0.0"
    }
)

// Array de jogadores.
const jogadores = [
    { id: "12345", nome: "Michael Jordan" },
    { id: "25123", nome: "Lebron James" },
]

// Criando rotas.
server.get('/', (req, res, next) => {
    // res.send("Testando resposta do restify...")
    res.json(
        {
            message: "Sistema de Jogadores da NBA."
        }
    )
    return next()
})

server.get('/jogadores', (req, res, next) => {
    res.json(jogadores)
})

server.get('/jogadores/:jogador', (req, res, next) => {
    const filtrandoJogador = jogadores.filter(jogador => jogador.id === req.params.jogador)
    if (filtrandoJogador.length) {
        res.json(filtrandoJogador[0])
    } else {
        res.status(404)
        res.json({ message: "Recursos não encontrado" })
    }

    return next()
})

const porta = 8080
const endereco = 'localhost'

server.listen(porta, endereco, () => {
    console.log(`rodando no endereço ${endereco} na porta ${porta}`)
    console.log("Aperte CTRL-C para parar...")
})