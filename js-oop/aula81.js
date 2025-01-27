class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  // metodos criados na classe são adicionados ao prototype
  talk() {
    console.log(`${this.name} está falando.`);
  }

  eat() {
    console.log(`${this.name} está comendo.`);
  }

  drink() {
    console.log(`${this.name} está bebendo.`);
  }
}

const p1 = new Person('Luiz', 'Otávio');
console.log(p1); // Person { name: 'Luiz', lastName: 'Otávio' }
p1.talk(); // Luiz está falando.

function Person2(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

Person2.prototype.talk = function() {
  console.log(`${this.name} está falando.`);
}

const p2 = new Person2('Maria', 'A.');
p2.talk(); // Maria está falando.
