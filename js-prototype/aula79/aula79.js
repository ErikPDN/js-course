const sayHi = {
  sayHi() {
    console.log(`Hi, my name is not ${this.name}`);
  }
}

const sayAge = {
  sayAge() {
    console.log(`I am ${this.age} years old`);
  }
}

function CreatePerson(name, age) {
  return Object.create(personPrototype, {
    name: { value: name },
    age: { value: age }
  });
}

// personPrototype = Object.assign({}, sayHi, sayAge);
personPrototype = { ...sayHi, ...sayAge };

const p1 = CreatePerson('Luiz', 25);
p1.sayHi();
p1.sayAge();
