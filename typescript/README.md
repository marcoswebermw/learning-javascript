# TypeScript  

Aprendendo TypeScript.  

Typescript é um superset do Javascript. Isso significa que todo código Javascript é um código Typescript válido.  

No TypeScript podemos verificar alguns erros em tempo de compilação, que não são possíveis com Javascript puro.  

### Instalando.  

```sh
# Instalando globalmente.
npm install -g typescript

# Verificando versão do transpilador.
tsc --version

# Criando um diretório e um arquivo.
mkdir ts-teste

touch main.ts
```  

Criar arquivo ts, que contem código Javascript.  

```ts
// main.ts
function log(message){
    console.log(message)
}

let message = "Olá Mundo"

log(message)
```  

Transpilando o arquivo .ts, que resutará em um arquivo .js.  

```sh
# Transpilando.
tsc main.ts

# Executando arquivo gerado.
node main.js
```  

### Type Annotations  

Com as anotações de tipo, podemos receber erros de atribuição em tempo de compilação, além de previnir futuros erros de atribuição que poderiam ocorrer em Javascript.  

```ts
// main.ts
// Tipos.
let a: number;
let b: boolean;
let c: string;
let d:  any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false]

// Enum.
enum Color {Red = 0, Green = 1, Blue = 2};
let backgroundColor = Color.Red
```  

### Type Assertion  

Permite que demonstre para o Typescript de forma forçada o tipo em questão, já que pode não ficar tão claro para o compilador do Typescript de que tipo é uma variável.  

```js
// Aqui 'mensagem' será reconhecida com do tipo 'any'. 
// Isso ocorre pois a atribuição foi feita em uma linha posterior.
let mensagem;
mensagem = 'Olá!'
let endsWith = mensagem.endsWith('!')
```  

Aqui usando assertion type forçando o tipo para string. São demonstradas duas forma de se fazer isso 

```js
// Assertion Type.
let mensagem;
mensagem = 'Olá!'
let endsWith = (<string>mensagem).endsWith('!')
let endsWith2 = (mensagem as string).endsWith('!')
```  

### Interfaces  
  
```js
// Inline-annotations.
// Funciona mas não é a melhor solução caso tenha muitos parâmetros.
// Interfaces são uma solução melhor.
let minhaFuncao = ( valor : {a: number, b:number} ) =>{ 
    // faz alguma coisa.
}

// Usando interfaces.
interface Valor {
    a : number,
    y : number
}

let minhaFuncao2 = (valor : Valor) => {
    // Faz alguma coisa.
}
```  
