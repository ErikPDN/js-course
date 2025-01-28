import { name as firstName, lastName, yearOld, sum, Person } from './module1.js';

console.log('My name is ' + firstName + ' ' + lastName);
console.log('I am ' + yearOld + ' years old');

console.log(sum(2, 3));
const p1 = new Person('Gabriel', 20);
console.log(p1);
