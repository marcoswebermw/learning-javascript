
let promessa = new Promise(function(resolve, reject){
  let valor = 0;

  if(valor === 0){
    resolve('Funcionou!!!');
  } else {
    reject('Deu erro!!!');
  }

});

promessa.then(
  function(resposta){
    console.log(resposta); // Funcionou!!!
  },
  function(deuErro){
    console.log(deuErro);  // Deu erro!!!
  });
