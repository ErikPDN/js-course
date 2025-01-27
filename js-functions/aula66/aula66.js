// Map 
// Map altera o array original, diferente do filter que retorna um novo array

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const doubleNumbers = numbers.map(value => value * 2)
console.log(doubleNumbers)

const people = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const name = people.map(obj => obj.nome)
const removeNameFromPeople = people.map(obj => ({ idade: obj.idade }))

const generateRandomId = () => {
  return Math.floor(Math.random() * 1000); // Corrigido para Math.floor
};

// Modifica o array people, adicionando um id a cada objeto
const addId = people.map((obj) => {
  // ...obj copia todos os atributos de obj
  obj.id = generateRandomId(); // Chama a função generateRandomId corretamente
  return obj; // Retorna o objeto modificado
});

console.log(name)
console.log(removeNameFromPeople)
console.log(people)

