// Gerando valores infinitos.
// Bom para criar ids únicos.
const infinito = function* (){
  let contador = 0;
  while(true){
    yield contador++;
  }
}

let c = infinito();

// O ´done:´ nunca ficará com o valor ´true´.
console.log(c.next()); // { value: 0, done: false }
console.log(c.next()); // { value: 1, done: false }
console.log(c.next()); // { value: 2, done: false }
console.log(c.next()); // { value: 3, done: false }
