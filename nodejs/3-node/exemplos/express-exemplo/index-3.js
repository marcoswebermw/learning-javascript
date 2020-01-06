// Usando o 'res.sendFile(recurso)'.
// Template Engine.
const express = require('express')
const app = express()

// Definindo o template engine.
// Os arquivos tem que estar dentro de '/views'.
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/home', (req, res)=>{
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/sobre', (req, res)=>{
    res.sendFile(`${__dirname}/sobre.html`)
})


let jogador = {
    1 : {
        nome : 'Messi',
        times : ['Barcelona']
    },
    2 : {
        nome : 'Cristiano Ronaldo',
        times : ['Sporting', 'Manchester United', 'Real Madrid', 'Juventus']
    }
}

// URL: http://127.0.0.1:3000/jogador/1
// URL: http://127.0.0.1:3000/jogador/2
app.get('/jogador/:id', (req, res)=>{
    // Usando o 'render' no lugar de 'res.send'.
    // Os parâmetros são passados para a view aqui.    
    res.render('jogador', { 
        id : req.params.id,
        nome : jogador[req.params.id].nome, 
        times : jogador[req.params.id].times
    })
})

// export PORT=5000; nodemon index-3.js
const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Servidor executando em http://127.0.0.1:${port}`)
})