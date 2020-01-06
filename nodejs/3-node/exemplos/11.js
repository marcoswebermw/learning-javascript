// Ler e escrever arquivo de forma sincrona.
let fs = require('fs')

let texto = fs.readFileSync('arquivo.txt', 'utf8')

console.log(texto)

fs.writeFileSync('Arquivo2.txt', texto)
