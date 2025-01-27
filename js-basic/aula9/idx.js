const name = "Erik"; // String 
const number1 = 10; // number 
const number2 = 10.12; // number 
let undef; // undefined
const nulo = null; // null
const denied = false; // boolean


const a = 2;
const b = a;

console.log(a, b)

// a = 3

console.log(a, b)

let arr1 = [1, 2, 3]
let arr2 = arr1  // como recebe a mesma referencia de arr na memoria ao modificar um modifica o outro

arr2.push(4)

console.log(arr1, arr2)