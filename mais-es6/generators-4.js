// Genarators de outros genarotors.
// O yield ganha um spark '*'.

const vogaisMinusculas = function* (){
  yield 'a';
  yield 'e';
  yield 'i';
  yield 'o';
  yield 'u';
}

const vogaisMaiusculas = function* (){
  yield 'A';
  yield 'E';
  yield 'I';
  yield 'O';
  yield 'U';
}


// Aqui é onde o yield ganha um spark indicando que é um genarotor de outro genarator.
// A execução do yield ´vogaisMinusculas´ só terminará quando todos os seus elementos
// forem percorridos. A partir daí serão os elementos de ´vogaisMaiusculas´.
const vogais = function* () {
  yield* vogaisMinusculas();
  yield* vogaisMaiusculas();
}

let v = vogais();

console.log(v.next().value); // a
console.log(v.next().value); // e
console.log(v.next().value); // i
console.log(v.next().value); // o
console.log(v.next().value); // u
console.log(v.next().value); // A
console.log(v.next().value); // E
console.log(v.next().value); // I
console.log(v.next().value); // O
console.log(v.next().value); // U
console.log(v.next().value); // undefined
