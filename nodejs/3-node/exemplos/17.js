// ReadStream
const fs = require('fs')

let lerStream = fs.createReadStream('arquivo.txt', 'utf8')

// Setando o encode por um método.
// lerStream.setEncoding('utf8')

// Herda do módulo 'events' por isso pode usar o 'on'.
// Evento 'data' lê os pedaços automaticamente.
lerStream.on('data', (pedacoTexto)=>{
    console.log('**********************')
    console.log(pedacoTexto)
})

// Evento usado para indicar o fim da leitura.
lerStream.on('end', (pedacoTexto)=>{
    console.log('**********FIM************')
    console.log('O arquivo chegou ao fim.')
})