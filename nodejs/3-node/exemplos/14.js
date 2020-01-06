// Events e EventEmitter.
const events = require('events')

let eventEmitter = new events.EventEmitter()

eventEmitter.on('executar', ()=>{
    console.log('Listener eperando o evento ocorrer')
})

eventEmitter.emit('executar')
