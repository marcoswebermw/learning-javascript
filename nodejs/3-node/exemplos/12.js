// Ler arquivo de forma assincrona.
let fs = require('fs')

let texto = fs.readFile('arquivo.txt', 'utf8', (erros, dados)=>{
    if(erros)
        return console.error(erros)

    console.log(dados)
})

console.log('Lendo um arquivo assincronamente.')
