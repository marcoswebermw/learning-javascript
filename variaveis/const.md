## Const (ES6)

É possível definir uma **referência** como `const`.  
Isso significa que a referência não poderá ser mudada durante o decorrer da
execução da aplicação, mas alguma propriedade dela sim.
Const tem que ter seu valor definido durante sua declaração.

**Exemplo 1**

```js
const nome = 'Fulano';
console.log(nome);

nome = 'Sicrano'; // Erro de tentativa de atruibuição de uma constante.
```

**Exemplo 2**

```js
const obj = {nome: 'Fulano'};
console.log(obj);  // {nome: 'Fulano'}

obj.nome = 'Beltrano';
console.log(obj);  // {nome: 'Beltrano'}


const obj2 = {nome: 'Sicrano'};
console.log(obj2);  // {nome: 'Sicrano'}

obj = obj2;  // Aqui ocorre o erro. A referência de uma constante não pode mudar.

```
