const names = ["Maria", "João", "Beatriz", "Amanda", "Estela", "Fernando"];

// names.splice(index, howMany, item1, ....., itemX)
// pop 
const remNames = names.splice(-1, 1);
console.log(remNames);

// shift 
const remNames2 = names.splice(0, 1);
console.log(remNames2);

// push 
names.splice(names.length, 0, "Erik");
console.log(names);

// unshift
names.splice(0, 0, "Erik");
console.log(names);

