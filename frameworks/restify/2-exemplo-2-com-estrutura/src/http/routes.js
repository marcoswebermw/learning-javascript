const routes = (server) => {

    // Array de jogadores.
    let jogadores = [
        { id: "12345", nome: "Michael Jordan" },
        { id: "25123", nome: "Lebron James" },
        { id: "23423", nome: "Kawai Leonard" },
    ]

    // Criando rotas.
    server.get('/', (req, res, next) => {
        // res.send("Testando resposta do restify...")
        res.json({ message: "Sistema de Jogadores da NBA." }
        )
        return next()
    })

    server.get('/jogadores', (req, res, next) => {
        res.json(jogadores)
        return next()
    })

    server.get('/jogadores/:jogador', (req, res, next) => {
        const filtrandoJogador = jogadores.filter(jogador => jogador.id === req.params.jogador)
        if (filtrandoJogador.length) {
            res.json(filtrandoJogador[0])
        } else {
            res.status(404)
            res.json({ message: "Recurso não encontrado" })
        }

        return next()
    })

    server.post('/jogadores/inserir/:idjogador:nomejogador', (req, res, next) => {
        const idjogador = req.params.idjogador
        const nomejogador = req.params.nomejogador
        jogadores.push({ id: idjogador, nome: nomejogador })
        res.json(jogadores)
        return next()
    })


    server.del('/jogadores/remover/:idjogador', (req, res, next) => {
        const idjogador = req.params.idjogador

        const filtrarJogadores = jogadores.filter((j) => {
            // Se tiver ID igual não é adicionado na lista a ser retornada.
            if (j.id === idjogador) { return false }
            return true
        })

        jogadores = filtrarJogadores
        res.json(jogadores)
        return next()
    })

}

module.exports = routes