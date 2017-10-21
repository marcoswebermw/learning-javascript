## Herança em Javascript

### Exemplo de herança em javascript.

```js
// Prototype

// Definição da classe.
function Animal(tipo, nome, temPelo, sexo){
  this.tipo = tipo;
  this.nome = nome;
  this.temPelo = temPelo;
  this.sexo = sexo;
  this.qualSexo = function(){
    return `É ${this.sexo}`;  // Usando template string (Interpolação).
  }
}

// Adicionando novo método.
Animal.prototype.mostrarDetalhes = function(){
  return `Tipo: ${this.tipo}, Nome: ${this.nome}, Tem Pêlo: ${this.temPelo}`;
};

// =~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~
// Testando.
const animal1 = new Animal('Cachorro', 'Rex', true, 'Macho');
const {tipo, nome, temPelo, sexo} = animal1; // Usando destructuring.

console.log(tipo);     // Cachorro.
console.log(nome);     // Rex.
console.log(temPelo);  // true.
console.log(sexo);     // Macho.
console.log(animal1.qualSexo());      // É Macho.
console.log(animal1.mostrarDetalhes()) // Tipo: Cachorro, Nome: Rex, Tem Pêlo: true.


// =~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~
// Herança.
console.log('\n=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~\n');

function Cachorro(tipo, nome, temPelo, sexo, raca){
  Animal.call(this, tipo, nome, temPelo, sexo);
  this.raca = raca;
}

// Adicionando os métodos.
Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.costructor = Cachorro.prototype;

const cachorro1 = new Cachorro('Cachorro', 'Grafite', true, 'Macho', 'Bulldog');
const tipoC = cachorro1.tipo;
const nomeC  = cachorro1.nome;
const temPeloC = cachorro1.temPelo;
const sexoC = cachorro1.sexo;
const racaC = cachorro1.raca; // Usando destructuring.

console.log(tipoC);     // Cachorro.
console.log(nomeC);     // Grafite.
console.log(temPeloC);  // true.
console.log(sexoC);     // Macho.
console.log(racaC);     // Bulldog.
console.log(cachorro1.qualSexo());      // É Macho.
console.log(cachorro1.mostrarDetalhes()) // Tipo: Cachorro, Nome: Rex, Tem Pêlo: true.

```
