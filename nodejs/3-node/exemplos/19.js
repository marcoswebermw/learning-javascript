// Pipe.
const fs = require('fs')

const lerStream = fs.createReadStream('arquivo.txt')
lerStream.setEncoding('utf8')

const escreverStream = fs.createWriteStream('novo_arquivo2.txt')

lerStream.pipe(escreverStream)