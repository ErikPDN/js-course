const produto = { name: 'Bic Preta', price: 1.90 }
// const outraCoisa = { ...produto, discount: 0.2 }  // spread
// outraCoisa.name = 'Caneta Azul'

// faz a mesma coisa
const outraCoisa = Object.assign({}, produto, { discount: 0.2 })
// const caneta = { nome: 'Bic Azul', preco: produto.price }
console.log(Object.getOwnPropertyDescriptor(produto, 'name'))
// Object.defineProperty(produto, 'name', {
//   writable: false,
// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'name'))

// console.log(produto)
// console.log(outraCoisa)
// console.log(caneta)
// console.log(Object.keys(produto))
console.log(Object.values(produto))
// console.log(Object.entries(produto))

for (let [key, value] of Object.entries(produto)) {
  console.log(key, value)
}

