## Métodos HTTP
  
O protocolo http possui diversos métodos que podem ser usados dentro de uma requisição nesse protocolo.  

### GET
  
Faz a requisição de informações para o servidor.  
  
`http.get(param1, param2);`  
  
* param1 - É um objeto JSON contendo a configuração da requisição(host, url, porta, agent, etc).  
* param2 - Callback que é executada após a finalização da requisição, para tratamento da resposta.  
  
**Exemplo**  
  
```js
let http = require('http');

let confRequisicao = {
    hostname: 'localhost',
    path: '/cidade?estado=SC&cidade=Floripa',
    port: '3000',
    agent: false
};

let callbackResposta = function(resposta){
    console.log('Código de status: ' + resposta.statusCode);
    console.log('Cabeçalhos: ' + resposta.headers);
}

http.get(confRequisicao, callbackResposta);

```





