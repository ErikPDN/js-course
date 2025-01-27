// const name = 'Erik Pereira';

// for (let idx in name) {
//     console.log(name[idx]);
// }

// for (let char of name) {
//     console.log(char);
// }

const names = ['Erik', 'Luis', 'Gustavo'];

// percorre diretamente sobre os valores de um objeto iterável
for (let name of names) console.log(name);

console.log("--------")

names.forEach((e, idx) => {
    console.log(e, idx);
});