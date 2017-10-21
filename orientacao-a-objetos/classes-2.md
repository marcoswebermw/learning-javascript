## Classes ES6

### Classes como expressões

```js
// Classe como expressões

const Banco = class MeuBanco{

  nome = 'Banco Brasileiro Nacional';

  nomeDaClasse(){
    return MeuBanco.name;
  };
};

const b = new Banco();  
console.log(b.nome);           // Banco Brasileiro Nacional.
console.log(b.nomeDaClasse()); // MeuBanco.

```


### Classes como expressões anônimas

```js
// Classe como expressões anônimas

const Animal = class{

  nome = 'Rex';
  tipo = 'Cachorro';

  nomeDaClasse(){
    return Animal.name;
  };
};

const a = new Animal();
console.log(a.nome);             // Rex.
console.log(a.tipo);             // Cachorro.
console.log(a.nomeDaClasse());   // Animal.

```
