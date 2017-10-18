## Template String (ES6)

Permite trabalhar com strings de forma mais eficiente no Javascript.  
Agora conseguimos fazer interpolação de strings, quebra de linhas e espaços
sem colocar comandos de escapes.

### Template Strings Simples

**Interpolação de String**

Usa-se a crase(\`) para delimitar a string que passa a processar determinados conteúdos.  
Para acontecer a interpolação é necessário colocar o `${}`.  

```js
// Interpolando strings e números.
const pi = 3.14
console.log(`O valor de PI é: ${pi}`); // O valor de PI é: 3.14

let x = 2;
let y = 3;

// Interpolando e fazendo calculos na string.
console.log(`${x} * ${y} = ${x * y}`); // 2 * 3 = 6

```

**multiplas linhas e espaços mantidos**

```js

// String em multiplas linhas.
console.log(`Primeira Linha
Segunda Linha
Terceira Linha`);
```

### Template Strings Marcado(tag)

Permite que seja possível processar um conjunto de string com outros valores,
dentro de uma função que retorna a string devidamente processada.  
Repare que na chamada de função não existe parêntese e a string está craseada.  
Particularmente achei meio inútil esse novo modo.

```js

  const valor = -10
  const msg = valorPositivoOuNegativo`Oi, o valor ${valor} é ${""}`;

  console.log(msg); // Oi, o valor -10 é negativo.

  function valorPositivoOuNegativo(arrayTexto, ...arrayValores){
    if (arrayValores[0] > 0) {
      arrayValores[1] = "positivo.";
    } else if (arrayValores[0] < 0) {
      arrayValores[1] = "negativo.";
    } else {
      arrayValores[1] = "diferente de positivo e negativo.";
    }

    return `${arrayTexto[0]}${arrayValores[0]}${arrayTexto[1]}${arrayValores[1]}`;
  };
```
