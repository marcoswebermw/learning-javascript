// Genarators de objetos iteráveis.
// Como arrays, strings, etc.
// O yield ganha um spark '*'.
const nome = function* (){
  yield* "Brasil";
}


let n = nome();

console.log(n.next().value); // B
console.log(n.next().value); // r
console.log(n.next().value); // a
console.log(n.next().value); // s
console.log(n.next().value); // i
console.log(n.next().value); // l
console.log(n.next().value); // undefined
