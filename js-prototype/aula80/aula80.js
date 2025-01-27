const people = [
  { id: 3, name: "erik" },
  { id: 2, name: "erik1" },
  { id: 1, name: "erik2" },
];

// const newPeople = {};
// for (const { id, name } of people) {
//   newPeople[id] = { id, name };
// }

// const newPeople = {};
// for (const person of people) {
//   const { id } = person;
//   newPeople[id] = { ...person };
// }

const newPeople = new Map();
for (const person of people) {
  newPeople.set(person.id, { ...person });
}

console.log(newPeople);

for (const [identifier, { id, name }] of newPeople) {
  console.log(identifier, id, name);
}
