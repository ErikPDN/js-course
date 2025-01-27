// Factory function
function createPeople(name, lastName, height, weight) {
    return {
        name, 
        lastName,
        say: function () {
            return `${this.name} está falando` ;
        },
        getFullName() {
            return this.name + " " + this.lastName;
        },
        height: height,
        weight: weight
    };
}

function calculateImc(height, weight) {
    return (weight / height**2).toFixed(2);
}

const p1 = createPeople("Erik", "Pereira", 1.7, 73);

console.log(p1.name);
console.log(p1.say());
console.log(p1.getFullName());
console.log(calculateImc(p1.height, p1.weight));