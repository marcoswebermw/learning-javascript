// Promises aninhadas.
let promessa = new Promise( function(resolve, reject){
  let operacaoAssincronaDeuCerto = true;

  if (operacaoAssincronaDeuCerto) {
    resolve('Operação assíncrona deu certo.');
  } else {
    reject('Operação assíncrona deu errado.');
  }

  console.log('Este código provavelmente será executado antes da promise terminar.');

});

promessa
  .then( function(resposta){
    console.log(`${resposta}`);
  })
  .catch( function(resposta){
    console.log(`${resposta}`);
  });
