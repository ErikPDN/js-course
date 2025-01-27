// constructor function

function People(name, lastName) {
    this.name = name;
    this.lastName = lastName;

    // método
    this.sayName = () => {
        console.log(`${this.name} ${this.lastName}`)
    }
}

const p1 = new People("Erik", "Pereira");
console.log(p1.lastName);
p1.sayName();