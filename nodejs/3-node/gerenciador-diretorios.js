const fs = require('fs')
const path = require('path')

function verificaParametros(){
    if (process.argv.length <=2){
        console.log(`\nForma de Usar: ${__filename} [DIRETÓRIO]`)
        process.exit(-1)
    }
}

function dirAtual(){
    return process.cwd()
}

// Isso está errado. Refazer. Talvez com async await.
function listarDirAsync(diretorio){
    return fs.readdir(diretorio, (erro, arquivos)=>{
        let listaArquivos = []
        if (erro) throw erro
        arquivos.forEach(arq => {
            listaArquivos.push(arq)
            console.log(typeof(arq))
        })
        // console.log(arquivos);
        // listaArquivos = arquivos
        return listaArquivos
    })
    // console.log(listaArquivos)
    // return listaArquivos
}

function listarDirSync(diretorio){    
    return fs.readdirSync(diretorio)
}


function separarTipoElemento(diretorio){    
    arquivos = fs.readdirSync(diretorio, {withFileTypes: true})
    .filter(item => !item.isDirectory())
    .map(item => item.name)
    
    diretorios = fs.readdirSync(diretorio, {withFileTypes: true})
    .filter(item => item.isDirectory())
    .map(item => item.name)

    return {arquivos, diretorios}
}

// console.log(dirAtual())

let arquivos = listarDirAsync(process.cwd())
console.log(arquivos)

let arquivos2 = listarDirSync(process.cwd())
console.log(arquivos2)

let tipos = separarTipoElemento(process.cwd())
console.log(tipos)

// TODO
// verificar se é arquivo (usar stats)
// verificar se é diretorio
// tamanho do arquivo
// criar, alterar, remover arquivo e diretorios
// exibir modo das permissões(x, w, r, ou -) para dono, grupo, outros.
