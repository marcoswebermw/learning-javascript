
let promessa = new Promise(function(resolve, reject){
  let valor = 0;

  if(valor === 0){
    resolve();
  } else {
    reject();
  }

});

promessa.then(function(){
  console.log('Funcionou - Aqui é o valor caso `resolve()` for chamado.');
}, function(){
  console.log('Deu Erro - Aqui é o valor caso o `reject()` for chamado.');
});
