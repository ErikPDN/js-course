const name = 'Erik';
export const lastName = 'Neves';  // Já exporta a constante
const yearOld = 20;

function sum(x, y) {
  return x + y;
}

export { name, yearOld, sum };

export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
