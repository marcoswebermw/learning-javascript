// Criar classe.
class Animal{
  // Construtor.
  constructor(nome, tipo){
    this.nome = nome;
    this.tipo = tipo;
  }

  andar(){
    return `O ${this.tipo} está andando.`;
  };

}

// Instanciando classe.
const animal1 = new Animal('Rex', 'Cachorro');
console.log(animal1.nome);
console.log(animal1.tipo);
console.log(animal1.andar());

// ---------------------------------------------------------
// Extendendo uma classe.
class Pato extends Animal{

  constructor(nome, tipo){
    super(nome, tipo);     // Chamando o construtor da superclasse.
  }

  emitirSom(){
    return "quack quack quack";
  }
}

// Instanciando a classe pato.
const p = new Pato('Donald', 'Pato');
console.log(p.nome);
console.log(p.tipo);
console.log(p.andar());
console.log(p.emitirSom());
