const db = require('../services/mysql/mysql')

const routes = (server) => {

    // Criando rotas.
    server.get('/', async (req, res, next) => {
        try {
            res.send(await db.jogadores().all())
        } catch (error) {
            res.send(error)
        }
        next()
    })

    server.get('/jogadores', async (req, res, next) => {
        try {
            res.send(await db.jogadores().all())
        } catch (error) {
            res.send(error)
        }
        next()
    })

    server.post('/jogadores', async (req, res, next) => {
        const { nome } = req.params
        try {
            res.send(await db.jogadores().save(nome))
        } catch (error) {
            res.send(error)
        }
        next()
    })

    server.put('/jogadores', async (req, res, next) => {
        const { id, nome } = req.params
        try {
            res.send(await db.jogadores().update(id, nome))
        } catch (error) {
            res.send(error)
        }
        next()
    })

    server.del('/jogadores', async (req, res, next) => {
        const { id } = req.params
        try {
            res.send(await db.jogadores().del(id))
        } catch (error) {
            res.send(error)
        }
        next()
    })


}

module.exports = routes