// Reduce 


const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const sum = numbers.reduce((count, num) => { // (count, number, index, array)
  count += num
  return count
}, 0)  // valor inicial do count


// Utilizando o reduce para filtrar números pares
const isEven = numbers.reduce((count, num) => {
  num % 2 === 0 ? count.push(num) : null
  return count
}, [])

// Utilizando o reduce para dobrar os números

const doubleNumbers = numbers.reduce((count, num) => {
  count.push(num * 2)
  return count
}, [])

console.log(sum)
console.log(isEven)
console.log(doubleNumbers)

const people = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 63 },
  { nome: 'Wallace', idade: 64 },
];

const older = people.reduce((count, obj) => {
  if (count.idade > obj.idade) return count
  return obj;
}, 0)

console.log(older)
