let promessa = new Promise( function(resolve, reject){
  let operacaoAssincronaDeuCerto = true;

  if (operacaoAssincronaDeuCerto) {
    resolve('Operação assíncrona deu certo.');
  } else {
    reject('Operação assíncrona deu errado.');
  }

  console.log('Este código provavelmente será executado antes da promise terminar.');

});

// Código executado caso a promise seja executada com sucesso.
promessa.then( function(resposta){
  console.log(`${resposta}`);
});

// Código executado caso a promise seja executado com falha.
promessa.catch( function(resposta){
  console.log(`${resposta}`);
});
