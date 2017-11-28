## Módulo HTTP
  
É um módulo nativo do node usado para trabalhar com protocolo http. É um dos principais módulos usados no node. 
É usado principalmente para criar um servidor web para as aplicações.  

Ele é importado usando `require('http')`.  
  
`let servidor = require('http');`
  
### Criando um servidor http
  
O módulo http fornece o método `createServer` para criarmos um servidor.  
Este método recebe uma função com dois parâmetros:  
  
* `request` para fazermos uma requisição para o servidor.  
* `response` para a resposta que o servidor dará.  
  
```js
  function(request, response){
      // Faz alguma coisa.
  }
```

**Métodos do `response` e `request`**
  
* `response.writeHead`  
  
Escreve o cabeçalho da resposta que será enviada para o cliente.  
Para ser mais preciso, define o código de status de uma requisição e tipo do conteúdo que o servidor enviará.  
  
`response.writeHead( 200, {'Content-Type' : 'text/plain'} );`  
`response.writeHead( 404, {'Content-Type' : 'text/html'} );`  
  
* `response.write`  
  
> [Lista de códigos de status](https://pt.wikipedia.org/wiki/Lista_de_c%C3%B3digos_de_estado_HTTP).  
> [Lista de informações do tipo de conteúdo que pode ser retornado.](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields).  
  
Escreve o conteúdo da resposta.  
  
`response.write( 'Olá Mundo!!!' )`;  
`response.write( '<h1> Olá Mundo!!! </h1>' )`;   
  
* `response.end`  
  
Define o fim da conexão com o cliente.  
  
`response.end();`  
  
* `request.url`  
  
Retorna a url acessada no momento.  
  
`request.url === '/'`  
  

**Colocando o servidor para escutar requisições**  
  
O módulo http também fornece o método `listen` para permitir que o servidor escute requisições.  
Esse método recebe dois parâmetros:  
  

  * `3000` -  A porta onde o servidor irá escutar. O padrão do Nodejs é a porta 3000.  
  * `callback` - Uma função de callback muito usada para logs e outras tarefas depois que o cliente se conecta ao servidor.  
    
### Exemplo  
  
```js
let http = require('http');
let porta = 3000;

let gerenciaConexao = function(requisicao, resposta){
  resposta.writeHead(200, {'Content-Type':'text/plain'});
  resposta.write('Olá Mundo!!!');
  resposta.end();
};

let executandoServidor = function(){
    console.log('Servidor executando em localhost...');
};

let servidor = http.createServer(gerenciaConexao);
servidor.listen(porta, executandoServidor);


```  
  
> O método `JSON.stringify()` converte valores em javascript para uma String JSON.  
  
   
### Referências
  
* [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify);
