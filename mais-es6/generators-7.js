// for..of com generators.

const palavras = function* (){
  yield* 'Olá Mundo!';
}

let palavra = palavras();

for(let p of palavra) {
  console.log(p);
}
