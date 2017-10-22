## Genarators (Funções Geradoras) ES6

Genarators são funções especias, que podem ser interrompidas e serem continuadas
posteriormente. São geralmente usadas para criar iteradores de maneira mais fácil. Elas executam até encontrarem a palavra yield.  

O yield define um ponto de parada da função. É parecido com um return. É possível ter mais de um yield por função.  

O yield para a execução da função e retorna algo para quem a chamou. Quando for chamada
novamente, a função vai continuar de onde parou na execução anterior, ou seja, a partir do
último yield executado, e vai até o próximo yield encontrado ou até chegar a seu final .   

O corpo de uma função geradora não é executado imediatamente. Na verdade é retornado
um objeto iterável, que pode ser iterado através de seu método `next`;  

Funções geradoras são definidas através do `*` (asterisco, mas aqui chamado de `spark`) que
é colocado no fim da palavra `function*` ou antes do nome da função `function *funcao(){}`.  

É comum o uso do `for..of` com funções geradoras.  

**Exemplo**

```js
// Definindo função geradora.
// Preste atenção no sinal ´spark´ indicando a função geradora.
// Quando for chamada pela primeira vez, através do ´next()´,
// ela executará o primeiro yield.
// Depois vai interromper a execução.
// Quando for chamada novamente continuará de onde parou.
function* funcaoGeradora(){
  yield 'Um';
  yield 'Dois';
  yield 'Três';
};

// Instânciando a função geradora.
let geradora = funcaoGeradora();

// Vai executar a função através do ´next()´.
// A cada execução será retornado um objeto literal com duas propriedades.
// A primeira ´value:´ indica o valor retornado pelo ´yield´.
// A segunda ´done:´ indica se os elementos chegaram ao fim.
// Se ´done:´ for ´true´ é retornado o ´value:´ como ´undefined´.
console.log(geradora.next());    // { value: 'Um', done: false }
console.log(geradora.next());    // { value: 'Dois', done: false }
console.log(geradora.next());    // { value: 'Três', done: false }
console.log(geradora.next());    // { value: 'undefined', done: true }
```
