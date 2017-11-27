## Promises(Promessas)

Uma promise é um objeto que permite que seja executado um código assincronamente prometendo
que quando este código termine o seu resultado será retornado. Com isso é possível
executar outras coisas enquanto a tarefa na promise não termina.  

O resultado de uma promise pode ser positivo, negativo ou esperando que algo termine.  

Callbacks são muito usados no Javascript porém tem um problema que é o de criar cascatas
de funções assíncronas, o chamado `calback hell` que dificulta a leitura e a depuração do código.  

Promises vem para evitar o `callback hell` ou `código em haduken`.  O callback hell
são várias chamadas assíncronas que dependem uma da outra. É difícil para o desenvolvedor
entender o que acontece em um código assim.  

Promises tem associados duas funções para caso seu resultado for positivo e negativo.
São elas: `then` para resultado positivo e `catch` para resultado negativo.  
