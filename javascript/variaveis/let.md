## Let (ES6)

O let serve para atribuir variáveis.  
Ele veio meio que para substituir o `var`.  
Diferentemente do `var`, o `let` e o `const` não permitem que uma variável seja definida mais
do que uma vez.

**Exemplo 1**

```js
var x = 1;
var x = 2; // Isso é permitido pelo linguagem.

let y = 3;
let y = 4; // Isso dará erro. Pois o y não pode ser declardo 2 vezes.

const z = 5;
const z = 6; // Isso dará erro. Pois o z não pode ser declardo 2 vezes.
```

### Escopo var, let e const

* O escopo de var só é delimitado dentro de funções. Ou seja, se o valor de uma
variável for alterado dentro de outros blocos como blocos condicionais, o valor
seria alterado globalmente fora do escopo desse bloco. Só dentro de blocos de
funções é que o var seria delimitado.

* O escopo de let e const é delimitado por bloco. Se um valor de variável for
mudado dentro do escopo de um bloco, ele não surtirá efeito e possíveis referências
fora do bloco.
