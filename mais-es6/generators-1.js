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
