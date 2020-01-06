// Objetos Globais.

// Executa algo depois de um tempo.
console.log('\nsetTimeout - Executa algo depois de um tempo.')
setTimeout( ()=>{
    console.log('setTimeOut - Passados 3 segundos')
}, 3000)

// Executa algo em loop até ser parado.
// setInterval retorna um ID que pode ser usado depois para pará-lo.
// Ele pode ser parado por clearInterval.
console.log('\nsetInterval - Executa algo em loop até ser parado')
let time = 0
let intervalID = setInterval( ()=>{
    time += 1
    console.log(`passou ${time} segundos`)
    if (time >= 10){
        clearInterval(intervalID)
    }
}, 1000)

