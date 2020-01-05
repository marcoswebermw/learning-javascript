const mysqlServer = require('mysql')

const conn = mysqlServer.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'jogadores'
})


const errorHandler = (errorMySql, msg, rejectFunction) => {
    rejectFunction({ errorMySql: msg })
}

const moduloJogadores = require('./jogadores')({ conn, errorHandler })

module.exports = {
    jogadores: () => moduloJogadores
}