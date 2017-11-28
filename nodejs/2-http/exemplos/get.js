// Primeiro execute o arquivo 'url.js' com 'node url.js'.
// Depois carregue este com 'node get.js'.

'use strict';

let http = require('http');

let confRequisicao = {
    hostname: 'localhost',
    path: '/mostraJSON',
    port: '3000',
    agent: false
};

let callbackResposta = function(resposta){
    console.log('Código de status: ' + resposta.statusCode);
    console.log('Cabeçalhos: ' + resposta.headers);
}

http.get(confRequisicao, callbackResposta);
