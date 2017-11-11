// Definindo função geradora.
// O ´spark(asterisco)´ agora está no nome da função.
function *funcaoGeradora(){
  yield 'Um';
  yield 'Dois';
  yield 'Três';
};

// Instânciando a função geradora.
let geradora = funcaoGeradora();

// Vai executar a função através do ´next()´.
// Mas logo em seguida vai retornar o valor do yield executado no momento.
console.log(geradora.next().value);    // 'Um'
console.log(geradora.next().value);    // 'Dois'
console.log(geradora.next().value);    // 'Três'
console.log(geradora.next().value);    // 'undefined'
