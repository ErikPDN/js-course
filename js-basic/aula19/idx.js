/*
    Primitivos (imutáveis) - string, number, boolean, undefined
    null, (bigint, symbol)

    Como a e b são strings (tipos primitivos), eles não compartilham a mesma referência. 
    Quando você altera b, a permanece inalterado.

*/

let a = "A";
let b = a; // recebe o valor de a (não a referência)
console.log(a); // "A"

b = "B";
console.log(b, a); // "B", "A"


let arrA = [1, 2, 3]
let arrB = arrA  // recebe a referência (mudar em um, muda no outro)

console.log(arrA, arrB)

arrB.push(4)

console.log(arrA, arrB)