// Filter 
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numbersGreaterThanTen = numbers.filter(value => value > 10)
console.log(numbersGreaterThanTen)

const people = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const peopleWithNamesGreaterThanFiveLetters = people.filter(obj => obj.nome.length >= 5)
const peopleWithAgeGreaterThanFifty = people.filter(obj => obj.idade > 50)
const peopleWithNameEndingWithA = people.filter(obj => obj.nome.endsWith('a'))
console.log(peopleWithNamesGreaterThanFiveLetters)
console.log(peopleWithAgeGreaterThanFifty)
console.log(peopleWithNameEndingWithA)

