// Events e EventEmitter.
const events = require('events')

let eventEmitter = new events.EventEmitter()

eventEmitter.on('executar', (argumento1, argumento2)=>{
    console.log(`O argumento 1 foi ${argumento1}`)
    console.log(`O argumento 2 foi ${argumento2}`)
})

eventEmitter.emit('executar', 'Olá', 'Mundo')