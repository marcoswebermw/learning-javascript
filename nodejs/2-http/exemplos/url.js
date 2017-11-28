// url.js
'use strict';

let http = require('http');
let porta = 3000;
let ip = 'localhost';

let arquivoJSON = {
    versao : '0.1',
    nome : 'Teste URLs',
    data : ( new Date() ).toJSON()
};

let gerenciaConexao = function(requisicao, resposta){
  if (requisicao.url === '/' )
  {
    resposta.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});    
    resposta.write('<h1>Testando URLs</h1>');
  } else if (requisicao.url === '/mostraJSON')
  {
    resposta.writeHead(200, {'Content-Type':'application/json'});    
    resposta.write( JSON.stringify(arquivoJSON) );
  } else 
  {
    resposta.writeHead(400, {'Content-Type':'text/html; charset=utf-8'});    
    resposta.write('<h1>Página não encontrada</h1>');
  }
  resposta.end();
};

let executandoServidor = function(){
    console.log(`Servidor executando em ${ip} na porta ${porta}.`);
    console.log('Tente executar as rotas: / e /mostraJSON.');
    console.log('Pressione ctrl + c para finalizar o servidor...');
};

let servidor = http.createServer(gerenciaConexao);
servidor.listen(porta, ip, executandoServidor);

