// Escrever arquivo de forma assincrona.
let fs = require('fs')

// Aqui a leitura é sincrona.
let texto = fs.readFileSync('arquivo.txt', 'utf8')

fs.writeFile('Arquivo3.txt', texto, (erros, dados)=>{
    if(erros)
        return console.error(erros)

    console.log('Arquivo criado assincronamente.')
})
