const path = require('path');
const pathFile = path.resolve(__dirname, 'people.json');
const write = require('./module/write');
const read = require('./module/read');

// const people = [
//   { name: 'Eric', age: 23 },
//   { name: 'Erik', age: 23 },
//   { name: 'Erick', age: 23 },
// ]
//
// const json = JSON.stringify(people, '', 2);
// write(pathFile, json);
read(pathFile)
  .then(data => console.log(JSON.parse(data)))
  .catch(err => console.log(err));

