## Nodejs  

Criado em 2009 por Ryan Dahl. 

Open source, cross plataform, runtime envirenment para desenvolvimento server-side.
O V8 vem encapsulado dentro de runtime feito em C, por isso tem um bom desempenho.

Server side Javascript;
Baseado em Event I/O para Javascript;
Usa o motor Google V8;
Usa licença MIT;
Tem o objetivo de construir aplicações de rede escaláveis de um modo fácil;
Usa assincrono IO;
Não é multithread;
É rápido;

### NVM  

Usar nvm para instalar a última versão.  

### Exemplo  

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```    

### Usando do Debuger  

O comando `node debug app.js` está depreciado. Agora use `node inspect app.js`.  
Para mostrar os comandos do debugger digite `help`.  

Para usar o depurador do Node no Chrome: `node --inspect-brk meu_script.js` e depois acesse no Chrome a url `chrome://inspect/#devices`.  

Alguns problemas podem ocorrer usando o depurador no Windows.  

O link da documentação do debugger é [Documentação](https://nodejs.org/docs/latest-v9.x/api/debugger.html).  

### NVM  

O NVM é usado para gerenciar multiplas versões do node em uma máquina. O repositório do NVM é [NVM](https://github.com/nvm-sh/nvm)  

No Linux:  

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash`   

As versões do node serão instaladas em `~/.nvm/`.  

> Existe um projeto chamado nvm-windows para rodar o nvm no Windows.  

Comandos:  

- `nvm ls` - Listar versões instaladas na máquina;  
- `nvm ls-remote` - Lista versões que podem ser baixadas;  
- `nvm install v.12.4.0` - Instalando determinada versão;  
- `nvm install node` - Instala a versão mais recente;  
- `nvm uninstall v.12.4.0` - Desinstalando uma versão;  
- `nvm use v.12.4.0` - Usar determinada versão do node;  
- `nvm use node` - Usa a versão mais recente;  
- `nvm alias doze v.12.4.0` - Colocando um apelido em uma versão;  
- `nvm use doze` - Usando uma versão pelo apelido;  
- `nvm unalias doze` - Removendo apelido;  
- `nvm alias default v.12.4.0` - Definindo uma versão padrão;  
- `nvm alias default node` - Definindo a versão padrão, para ser a mais recente instalada;  
- `nvm current` - Verificando a versão atual usada;  

Na raiz de cada projeto, crie um arquivo chamado `.nvmrc` e coloque dentro dele a versão usada no projeto. Quando entrar no projeto use o comando `nvm use`, O NVM vai entrar no arquivo e usar a versão indicada dentro dele neste projeto.  

### Objeto Global  

link da [documentação](https://nodejs.org/dist/latest-v10.x/docs/api/globals.html).  

São objetos disponíveis em todos os módulos.  

Exemplos:  

- setInterval;    
- setTimeOut;  
- clearImmediate;  
- clearInterval;  
- clearTimeout;  
- console;  
- global;  
- process;  
- setImmediate;  
- etc;  


> __dirname, __filename, exports, module e require(), parecem mas não são Globals. Elas só existem no escopo dos módulos.  

### Módulos  

Módulos podem ser importados como em  `require('nomeDoModulo')` com funções buit-in do node e também com funções que nós criamos através do `require('./meuModulo')`.  

Existem 3 formas de exportar algo, feito através do `exports` e `module.exports`:  

```js
// Exportando variável por variável.
exports.sayHelloInPortuguese = () => {
    return 'Olá'
}
exports.sayHelloInEnglish = () => {
    return 'Hello'
}
exports.sayHelloInSpanish = () => {
    return 'Hola'
}
```  

```js
// Exportando um objeto.
module.exports = {
    sayHelloInPortuguese : () => {
        return 'Olá'
    },
    sayHelloInEnglish : () => {
        return 'Hello'
    },
    sayHelloInSpanish : () => {
        return 'Hola'
    }
}
```  

```js
// Exportando uma variável.
let ola = {
    sayHelloInPortuguese : () => {
        return 'Olá'
    },
    sayHelloInEnglish : () => {
        return 'Hello'
    },
    sayHelloInSpanish : () => {
        return 'Hola'
    }
}

module.exports = ola
```  

### Lendo e Escrevendo Arquivos  

Para ler e escrever arquivos, o node oferece o módulo `fs` para trabalhar com o filesystem. Existe a forma sincrona, lê e grava tudo de uma vez, e assincrona, que vai lendo e gravando aos poucos(melhor para arquivos grandes) e sempre tem uma função de callback como último argumento.   

```js
// Ler e escrever arquivo de forma sincrona.
let fs = require('fs')

let texto = fs.readFileSync('arquivo.txt', 'utf8')

console.log(texto)

fs.writeFileSync('Arquivo2.txt', texto)
```  

```js
// Ler arquivo de forma assincrona.
let fs = require('fs')

let texto = fs.readFile('arquivo.txt', 'utf8', (erros, dados)=>{
    if(erros)
        return console.error(erros)

    console.log(dados)
})

console.log('Lendo um arquivo assincronamente.')
```  

```js
// Escrever arquivo de forma assincrona.
let fs = require('fs')

// Aqui a leitura é sincrona.
let texto = fs.readFileSync('arquivo.txt', 'utf8')

fs.writeFile('Arquivo3.txt', texto, (erros, dados)=>{
    if(erros)
        return console.error(erros)

    console.log('Arquivo criado assincronamente.')
})
```  

### Diretórios  

O módulo `fs` também tem métodos para trabalhar com diretórios de forma sincrona e assincrona. Operações assincronas não deixam os processos ocupados como as sincronas, por isso os exemplos aqui serão todos assincronos.  

```js

```  

### Events e EventEmitter  

Podemos criar Listerners para escutar quando determinados eventos são disparados, e executar alguma ação quando isto ocorrer.  

```js
// Events e EventEmitter.
const events = require('events')

let eventEmitter = new events.EventEmitter()

eventEmitter.on('executar', ()=>{
    console.log('Listener esperando eventor ocorrer...')
})

// Executando o evento.
eventEmitter.emit('executar')

```  

É possível passar argumentos através do `emmit` para o `on`.  

```js
// Events e EventEmitter.
const events = require('events')

let eventEmitter = new events.EventEmitter()

eventEmitter.on('executar', (argumento1, argumento2)=>{
    console.log(`O argumento 1 foi ${argumento1}`)
    console.log(`O argumento 2 foi ${argumento2}`)
})

eventEmitter.emit('executar', 'Olá', 'Mundo')
```  

Executando eventos através de uma classe.  

```js
// Events e EventEmitter.
const events = require('events')

// A classe Jogador herda os métodos de EventEmitter.
// Agora ela pode ser usada para criar e escutar eventos.
class Jogador extends events.EventEmitter {
    constructor(nome){
        super()
        this.nome = nome
    }
    
    marcou(gols) {
        this.emit('eventoMarcou', gols)
    }
}

// Criando um novo objeto da classe Jogador.
let messi = new Jogador('Messi')

// Criando ação para o evento.
messi.on('eventoMarcou', (gols)=>{
    console.log(`${messi.nome} marcou ${gols} gols.`)
})

// Acionando o evento.
messi.marcou('690')
```  

### Streams  

Stream permitem-nos ler e escrever de e em algumas fontes de dados por "pedaços" e não a fonte de dados por inteiro. Essencial para ler e escrever em grandes fontes de dados.

Lendo streams.  

```js
// ReadStream
const fs = require('fs')

let lerStream = fs.createReadStream('arquivo.txt', 'utf8')

// Herda do módulo 'events' por isso pode usar o 'on'.
// Evento 'data' lê os pedaços automaticamente.
lerStream.on('data', (pedacoTexto)=>{
    console.log('**********************')
    console.log(pedacoTexto)
})

// Evento usado para indicar o fim da leitura.
lerStream.on('end', (pedacoTexto)=>{
    console.log('**********FIM************')
    console.log('O arquivo chegou ao fim.')
})
```  

Escrevendo em streams.  

```js
// WriteStream.
const fs = require('fs')

let lerStream = fs.createReadStream('arquivo.txt')
lerStream.setEncoding('utf8')

let escreverStream = fs.createWriteStream('novo_arquivo.txt')

lerStream.on('data', (pedaco)=>{
    console.log('**********Lendo Arquivo e Escrevendo em Outro Arquivo********')    
    // Escrevendo no novo arquivo.
    escreverStream.write(pedaco)
})

// Evento usado para indicar o fim da leitura.
lerStream.on('end', (pedacoTexto)=>{
    console.log('**********FIM************')
    console.log('O arquivo chegou ao fim.')
})
```  

### Pipe  

Permite que mapear a saída de um stream para a entrada de outro stream de forma automatica.  

```js
// Pipe.
const fs = require('fs')

const lerStream = fs.createReadStream('arquivo.txt')
lerStream.setEncoding('utf8')

const escreverStream = fs.createWriteStream('novo_arquivo2.txt')

lerStream.pipe(escreverStream)
```  

Enviando o conteúdo de um arquivo para ser escrito no browser através da resposta do servidor.  

```js
// Pipe. Escrevendo no servidor.
const fs = require('fs')
const http = require('http')


http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})
    const lerStream = fs.createReadStream('arquivo.txt', 'utf8')
    // Mandando o conteúdo do arquivo como resposta para o servidor.
    lerStream.pipe(res)
    
}).listen(3000)

console.log('Servidor rodando em http://127.0.0.1:3000/')
```  

Agora, enviando um arquivo `html` para ser escrito no browser através da resposta do servidor.  

```js
// Pipe. Enviando um HTML para o servidor.
const fs = require('fs')
const http = require('http')

// Criando Servidor.
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
    const lerStream = fs.createReadStream('index.html', 'utf8')
    lerStream.pipe(res)
}).listen(3000)

console.log('Servidor executando em http://127.0.0.1:3000/')
```  

Arquivo HTML5.  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <style>
        body{
            background-color:darkgreen;
        }
    </style>
</head>
<body>
    <h1>Treinando NodeJs</h1>
</body>
</html>
```  

Enviando um arquivo JSON para o servidor.  

```js
// Pipe. Enviando um arquivo JSON para o servidor.
const fs = require('fs')
const http = require('http')

// Criando Servidor.
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'application/json'})
    
    let objJSON = {
        nome : 'Messi',
        time : 'Barcelona',
        numero: 10
    }

    // Transformando em um stream.
    objJSON = JSON.stringify(objJSON)

    res.end(objJSON)

}).listen(3000)

console.log('Servidor executando em http://127.0.0.1:3000/')
```  

Criando rotas  

```js
// Roteamento básico em nodejs.
const fs = require('fs')
const http = require('http')

http.createServer((req, res)=>{
    console.log(`URL requisitada: ${req.url}` )
    verificarRotas(req, res)
 }).listen(3000)

console.log('Servidor rodando em http://127.0.0.1/3000')

function verificarRotas(req, res){
    if (req.url === '/' || req.url === '/home'){
        res.writeHead(200, {'Content-Type': 'text/html;'})
        fs.createReadStream('index.html').pipe(res)

    } else if (req.url === '/sobre'){
        res.writeHead(200, {'Content-Type':'text/html'})
        fs.createReadStream('sobre.html').pipe(res)

    } else if (req.url === '/api'){
        res.writeHead(200, {'Content-Type':'application/json'})
        let objJSON = {
            nome: 'Messi',
            time: 'Barcelona',
            numero: 10
        }
        objJSON = JSON.stringify(objJSON)
        res.end(objJSON)

    } else {
        console.log('Erro 404. Página não encontrada.')
        res.writeHead(404, {'Content-Type':'text/html'})
        fs.createReadStream('404.html').pipe(res)

    }
}
```  

### Node Package Manager - NPM  

Aprendendo a usar o gerenciador de pacotes do Node.  

```sh
# Verificando a versão do NPM.
npm -v

# Instalando o módulo express.
npm install express

# Desinstalando módulo express.
npm uninstall express
```  

Forma comum de se criar um projeto.
```sh
# Iniciar projeto. Será criado o arquivo 'package.json'.
npm init

# Instalando módulo e salvando como dependência no 'package.json'.
npm install express -save

# Desinstalando pacotes.
npm uninstall express

# Agora, instalando, mas instalando os módulos da aplicação, automaticamente por meio do 'package.json'. O 'express' será instalando automaticamente.
npm install
```  

Instalando um módulo globalmente para ser usado por várias aplicações.  

> Não é uma boa prática instalar módulos globalmente, a não ser que o módulo tenha algum uso específico.  
  
> Módulos globais são instalados em `%AppData%\npm\node_modules` no Windows.  

Será instalado o módulo `nodemon` que serve para que não seja preciso reiniciar uma aplicação cada vez que uma alteração for feita em um script.  

```sh
# Instalando nodemon globalmente.
npm install nodemon -g 

# Usando o nodemon.
nodemon meu_app.js
```  

### Express  

Express é um framework web para nodejs.  

Instalando.  

```sh
npm init

npm install express --save

npm install nodemon -g

nodemon index.js
```  

index.js  

```js
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
```  

Servindo arquivos HTML com Express.  

```js
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
```  

### Templates com Express  

Instalando o template engine EJS.  

```sh
npm install --save ejs

nodemon index.js
```


```js
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


// export PORT=5000; nodemon index.js
const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Servidor executando em http://127.0.0.1:${port}`)
})
```  

Template view.  

```html
// jogador.ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Template Jogador</title>
</head>
<body>
    Página do Template do Joagador.
    <h1>O Jogador escolhido foi: <%= nome %> </h1>
    <p>Ele tem o ID: <%= id %></p>
</body>
</html>
```

> Estudar o PUG.  

### REST  

REST com Express e Restfy.  

```js
// GET.

// POST.

// PUT.

// DELETE.

// Validação.
```js  
