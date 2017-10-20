## Definindo nomes de funções e propriedades (ES6)

```js
// Propriedades no ES6
// Exemplo 1
const nomeMetodo = 'invocar';

const obj = {
  [nomeMetodo]()  {
    console.log('Oi, eu fui invocada');
  }
};

obj[nomeMetodo]();  // Oi, eu fui invocada.
obj.invocar();      // Oi, eu fui invocada.

```
