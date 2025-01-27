// .splice(); pode funcionar como pop() e push()

const names = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"];
const removedNames = names.splice(3, Number.MAX_VALUE);  // Maior numero que o JS pode representar
console.log("New array: ", names, "\nremoved names: ", removedNames);
names.splice(3, 0, 'Erik');  // como se fosse um push()
console.log(names);
