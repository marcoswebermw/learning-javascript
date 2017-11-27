## Classes ES6

### Métodos estáticos

São métodos que podem ser acessados sem uma instância da classe.

```js
class Animal{
  // Método estatico.
  static andar(){
    return "O animal está andando."
  }
};

// Sem instância.
Animal.andar();
```



### Improvisando atributos privados com ES6

```js
// Deixando atributos privados com WeakMaps.
const atributos = new WeakMap();

class Animal{
  constructor(tipo, nome){
    atributos.set(this, {tipo, nome});
  };

  getTipo(){
    return atributos.get(this)['tipo'];
  };

  getNome(){
    return atributos.get(this)['nome'];
  };

};

const a = new Animal('Cachorro', 'Rex');
console.log(a.getTipo());
console.log(a.getNome());
```
