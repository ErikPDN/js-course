// Declaração de função

// ocorre o hoisting
// 'move' declarações para o topo do escopo
// antes da exec
// sayHi()

// function sayHi() {
//     console.log("Hi!");
// }

// First-class objects (Objetos de primeira classe)
// Function expression
const data = function() {
    console.log("Im a data.");
};

data()

const result = function pow(base, exp) {
    return base**exp
}

function execFunc(func, ...args) {
    return func(...args);
}

// posso passar uma função como parametro e executa-la
console.log(execFunc(result, 10, 2));

const obj = {
    toSay: function() {
        console.log("I'm saying hi!")
    }
}

obj.toSay();