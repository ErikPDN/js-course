function sayPhrase(begin) {
    function sayLastPhrase(rest) {
        return begin + " " + rest;
    }
    return sayLastPhrase;
}

function createMultiplier(mult) {
    return (n) => {
        return n * mult;
    }
}

const helloWorld = sayPhrase("Hello");
console.log(helloWorld("world!"));

const duplicate = createMultiplier(2);
console.log(duplicate(10));