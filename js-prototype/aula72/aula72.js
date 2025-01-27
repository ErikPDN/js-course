// defineProperty -> Getters e Setters

class Produto {
  constructor(nome, preco, estoque) {
    if (typeof estoque !== 'number') {
      throw new TypeError('O valor inicial de estoque deve ser um número.');
    }
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
      enumerable: true,
      configurable: true,
      get: () => estoque,
      set: (valor) => {
        if (typeof valor !== 'number') {
          throw new TypeError('O valor de estoque deve ser um número.');
        }
        estoque = valor;
      },
    });
  }
}

p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(p1.estoque);
p1.estoque = 500;
console.log(p1.estoque);
