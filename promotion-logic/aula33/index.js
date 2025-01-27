const person = {
    name: "Erik",
    lastName: "Neves",
    yearsOld: 20,
    address: {
        street: "Franscisco Alves de Assis",
        number: 104
    }
};

// atribuição via desestruturação
// const { name: firstName = "", lastName, yearsOld } = person;
// console.log(firstName, lastName, yearsOld);

// const { address: { street, number }} = person;
// console.log(street, number);

// const { address: add } = person;
// console.log(add);

const { name, ...rest } = person;
console.log(rest);