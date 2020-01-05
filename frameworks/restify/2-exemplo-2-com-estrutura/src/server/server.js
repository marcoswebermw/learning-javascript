const restify = require('restify')

const server = restify.createServer(
    {
        name: "meu-servidor",
        version: "1.0.0"
    }
)
const routes = require('../http/routes')

// server.use(restify.plugins.bodyParser({ mapParams: true }))
server.use(restify.plugins.queryParser({ mapParams: true }))


routes(server)

module.exports = server

