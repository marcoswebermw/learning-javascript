// WriteStream.
const fs = require('fs')

let lerStream = fs.createReadStream('arquivo.txt')
lerStream.setEncoding('utf8')

let escreverStream = fs.createWriteStream('novo_arquivo.txt')

lerStream.on('data', (pedaco)=>{
    console.log('**********Lendo Arquivo e Escrevendo em Outro Arquivo********')    
    // Escrevendo no novo arquivo.
    escreverStream.write(pedaco)
})

// Evento usado para indicar o fim da leitura.
lerStream.on('end', (pedacoTexto)=>{
    console.log('**********FIM************')
    console.log('O arquivo chegou ao fim.')
})