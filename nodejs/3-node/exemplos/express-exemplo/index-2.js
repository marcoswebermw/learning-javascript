// Usando o 'res.sendFile(recurso)'.
const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/home', (req, res)=>{
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/sobre', (req, res)=>{
    res.sendFile(`${__dirname}/sobre.html`)
})

app.listen(3000, ()=>{
    console.log('Servidor executando em http://127.0.0.1:3000')
})