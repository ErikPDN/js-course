const person = {
    name: "Erik",
    yo: 20,
    chad: true
}

console.log(typeof person)

const createPerson = (name, lastName, yo) => ({name, lastName, yo})
console.log(createPerson("Jordana", "Alencar", 29))

const dog = {
    name: "Brutus",
    yo: 5,
    bark: "Auau",

    barks() {
        console.log(dog.bark)
    }
}

dog.barks()