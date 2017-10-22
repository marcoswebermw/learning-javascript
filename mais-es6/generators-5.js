// Genarators de objetos iteráveis.
// Como arrays, strings, etc.
// O yield ganha um spark '*'.

const num = [0, 1, 2, 3, 4];

const numeros = function* (){
  yield* num;
}


let n = numeros();

console.log(n.next().value); // 0
console.log(n.next().value); // 1
console.log(n.next().value); // 2
console.log(n.next().value); // 3
console.log(n.next().value); // 4
console.log(n.next().value); // undefined
