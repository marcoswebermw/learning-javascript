
let promessa = new Promise(function(resolve, reject){
  setTimeout(resolve, 1000, "Tudo certo");
  console.log('Vim depois, mas sou executado antes do `Tudo certo`');
});

promessa.then(
  function(resposta){
    console.log(resposta);
  },
  function(deuErro){
    console.log(deuErro);
  }
);
