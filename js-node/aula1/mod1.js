// const name = 'Erik';
// const lastName = 'Gomes';
//
// const sayMyName = (name, lastName) => {
//   console.log(`My name is ${name} ${lastName}`);
// }
//
// // console.log(module);
//
// exports.sayMyName = sayMyName;
// exports.name = name;
// exports.lastName = lastName;
// console.log(exports);
//
// // this reference to the module
// this.another = 'Another';
// console.log(exports);

class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

exports.Person = Person;
