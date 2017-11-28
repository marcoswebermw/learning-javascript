## NPM - Node Package Manager
  
NPM é o gerenciador de pacotes do nodejs/javascript.  

Ele usa o arquivo `package.json` para gerenciar um projeto.  

### npm init
  
* npm init - Inicia um projeto node e cria o `package.json`;   
  
### npm install
  
* npm install ou npm i - Instala algum módulo localmente descrito no `package.json`;  
* npm install --global( ou -g) - Instala um módulo de forma global, podendo este ser acessado via linha de comando;  
* npm install --save(ou -S) - Instala um módulo e o adiciona na lista de `dependencies` do `package.json`;  
* npm install --save-dev(ou -D) - Instala um módulo e o adiciona na lista de desenvolvimento em `devDependencies` no `package.json`;  
* npm install --optional(ou -O) - Instala dependências opcionais em `optionalDependencies` no `package.json`;  
* npm install --production - Instala somente as dependências listadas em `dependencies` no `package.json`.  
* npm install --dev - Instala somente as dependências listadas em `devDependencies` no `package.json`.  
  
    
`npm install -g gulp`    
`npm install --save mongoose`   
`npm install mongoose@">=4.1.0 <4.3.0"`    
`npm i -g mocha`    
   

### npm run
  
* npm run - Server para rodar scripts;   
  
`npm run meu_script.js`  
    
  
### Package.json
  
O `nome` do projeto e a `versão` são obrigatórios.  
  

> Adicionae o diretório `node_module` no `.gitignore` evitando que os módulos do node sejam levados para o repositório. Os módulos
devem ser baixados via dependências do `package.json`.   

### nodemon
  
O `nodemon` server para iniciar o servidor node mas quando fizermos alterações não precisamos reiniciá-lo.  
  
* Instalando o nodemon na linha de comando(-g)
  
`npm i -g nodemon`  
  
* Executando o nodemon  
  
`nodemon minha_app.js`
    
  
    
### Referências
  
* [NPM](https://www.npmjs.com/);  
