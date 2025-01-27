// defineProperty - dwfineProperties

class Produto {

  constructor(nome, preco, estoque) {
    // this.__nome = nome;
    // this.__preco = preco;
    // this.__estoque = estoque;

    Object.defineProperty(this, 'estoque', {
      enumerable: true, // mostra a chave
      value: estoque, // valor
      writable: true, // pode alterar
      configurable: true, // configurável
    });

    Object.defineProperties(this, {
      nome: {
        enumerable: true,
        value: nome,
        writable: true,
        configurable: true,
      },
      preco: {
        enumerable: true,
        value: preco,
        wirtable: true,
        configurable: true,
      }
    });
  }

  get nome() {
    return this.nome;
  }

  get estoque() {
    return this.estoque;
  }

  /**
   * @param {number} valor
   */
  set setEstoque(valor) {
    if (typeof valor !== 'number') {
      throw new TypeError('Invalid type');
    }
    this.estoque = valor;
  }
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1.nome);
console.log(p1);
console.log(p1.estoque);
p1.setEstoque = 500;
console.log(p1.estoque);
