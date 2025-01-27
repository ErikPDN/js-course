// IEEE 754-2008

// problema 
let num1 = 0.7  // não pode ser representado exatamente em binário
let num2 = 0.1

console.log(num1 + num2)

// correções 
num1 += num2
num1 = Number(num1.toFixed(2))
console.log(num1)

let result = Math.round((num1 + num2) * 100) / 100;
console.log(result)

// console.log(num1.toString() + num2.toString())
// console.log(typeof num1)
// console.log(num1.toString(2))  // converte para binario
// console.log(num1.toFixed(2))  // arredonda o número
// console.log(Number.isInteger(num1))  // verifica se é inteiro
// console.log(Number.isNaN(temp))
// let temp = num1 * "Olá"
