// New Object -> Object.prototype
// const objA = {
//   keyA: 'A'
//   // __proto__: Object.prototype
// };
//
//
// const objB = {
//   keyB: 'B'
//   // __proto__: Object.prototype
// };
//
// const objC = new Object();
// objC.keyC = 'C';
//
//
//
// Object.setPrototypeOf(objB, objA);  // semelhante a herança
// Object.setPrototypeOf(objC, objB);
// console.log(objB.keyA, objB.keyB);
// console.log(objC.keyA, objC.keyB, objC.keyC);

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  /**
   * @param {number} percetual
   */
  set desconto(percetual) {
    this.preco = this.preco - (this.preco * percetual / 100);
  }
}

const p1 = new Produto('Camiseta', 50);
// console.log(p1);
// p1.desconto = 10;
// console.log(p1);
const p2 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42,
  },
});

p2.desconto = 10;
console.log(p2);

