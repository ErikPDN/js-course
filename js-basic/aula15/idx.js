// let num1 = 3.5;
// let num2 = Math.floor(num1)  // arredonda pra baixo
// let num3 = Math.ceil(num1)  // arredonda pra cima
// console.log(num2) 
// console.log(num3)
// console.log(Math.round(num1))  // arredonda para o numero mais proximo

let arr = [1, 5, 2, 3]
//  operador '...' expande (ou "espalha") os elementos de um array (ou de um objeto iterável) 
//  para que possam ser tratados como elementos ou argumentos individuais.
console.log(Math.max(...arr))

const randomNumber = Math.round(Math.random() * 100)
console.log(randomNumber)

// Em javascript voce "pode" dividir um numero por 0
console.log(100 / 0)