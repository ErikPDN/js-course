// const mod1 = require('./mod1');
// const { name, lastName, sayMyName } = require('./mod1');
// console.log(name, lastName);
// sayMyName(name, lastName);

const { Person } = require('./mod1');
const axios = require('axios');
const path = require('path');

const person = new Person('Erik', 'Gomes');
console.log(person);

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => console.log(response.data))
  .catch(error => console.log(error));
