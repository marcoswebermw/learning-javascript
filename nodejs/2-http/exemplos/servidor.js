// servidor.js
'use strict';

let http = require('http');
let porta = 3000;

let conteudoHtml = [
    '<html>',
    '<head>',
        '<title>Olá Mundo</title>',
    '</head>',
    '<body>',
        '<h1>Olá Mundo!!!</h1>',
    '</body>',
    '</html>'
].join('');

let gerenciaConexao = function(requisicao, resposta){
  resposta.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});    
  resposta.write(conteudoHtml);
  resposta.end();
};

let executandoServidor = function(){
    console.log('Servidor executando em localhost...');
};

let servidor = http.createServer(gerenciaConexao);
servidor.listen(porta, executandoServidor);