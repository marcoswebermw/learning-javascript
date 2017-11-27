## NodeJS
  
É um interpretador Javascript desvinculado do navegador.  
Orientado à eventos.  
Gratuito e de código aberto.  
É a junção da engine `V8` do Google e a `libuv`(para operações assincronas).  
Escritos em C++.  
Usa gerenciador de pacotes `npm`.  
  

### Threads, IO não bloqueante
  
O Node roda em uma thread única(Event Loop) infinitamente.  

Se houver operação bloqueante(acesso a disco, rede, operações de I/O), é colocada em um `pool de threads`, que é uma thread que roda em background.  

Quando a operação bloqueante terminar sua execução no pool de threads, é enviada para uma fila de eventos(Event Queue) onde espera para entrar novamente no event loop.  

Não será mais usado uma thread para cada processo melhorando o desempenho das aplicações.  
  
(Event Loop)[http://softwareengineeringdaily.com/wp-content/uploads/2015/07/event-loop.jpg]  
  
### Vantagens do Nodejs
  
* Leve;  
* Consumo de CPU maior(número menor de processos ociosos);  
* Consumo menor de memória;  

### Onde Usar
  
* Api e Serviços;
* Bots e automação;
* Mensageria;
* Apps real-time e colaboração;
* Backend de jogos;
* IoT(Internet das coisas);  
  
 

### Referências
  
* (NodeJS)[https://nodejs.org/]  
* (Documentação)[https://nodejs.org/en/docs/]  
* (Be Mean - Gitbook)[https://be-mean.gitbooks.io/be-mean-node-js/content/index.html]  
* (Umbler Youtube)[https://www.youtube.com/watch?v=gq9uGdZCKxI]  
