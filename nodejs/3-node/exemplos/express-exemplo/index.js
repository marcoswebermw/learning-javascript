const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('<h1>Página Principal</h1>')
})

app.get('/home', (req, res)=>{
    res.send('<h1>Página Principal</h1>')
})

app.get('/sobre', (req, res)=>{
    res.send('<h1>Página Sobre</h1>')
})

let jogador = {
    1 : 'Messi',
    2 : 'Cristiano Ronaldo'
}

app.get('/jogador', (req, res)=>{
    res.send(jogador)
})

// URL: http://127.0.0.1:3000/jogador/1
// URL: http://127.0.0.1:3000/jogador/2
app.get('/jogador/:id', (req, res)=>{
    res.send(`O jogador escolhido foi: ${jogador[req.params.id]}`)
})

app.listen(3000, ()=>{
    console.log('Servidor executando em http://127.0.0.1:3000')
})