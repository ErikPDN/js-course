/*
FALSY
false
0
""  ''  ``
null / undefined
NaN
*/

console.log("Luiz Miranda" && 1 && "Maria");  // Retorna o valor da ultima condição verdadeira ou o primeiro valor falso

function randomFunc() {
    return "Hello";
}

let condition = true;
console.log(condition && randomFunc());