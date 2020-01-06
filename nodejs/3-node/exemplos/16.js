// Events e EventEmitter.
const events = require('events')

// A classe Jogador herda os métodos de EventEmitter.
// Agora ela pode ser usada para criar e escutar eventos.
class Jogador extends events.EventEmitter {
    constructor(nome){
        super()
        this.nome = nome
    }
    
    marcou(gols) {
        this.emit('eventoMarcou', gols)
    }
}

// Criando um novo objeto da classe Jogador.
let messi = new Jogador('Messi')

// Criando ação para o evento.
messi.on('eventoMarcou', (gols)=>{
    console.log(`${messi.nome} marcou ${gols} gols.`)
})

// Acionando o evento.
messi.marcou('690')