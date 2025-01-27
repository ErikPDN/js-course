function randomNumber(min, max) {
    const number = Math.random() * (max - min) + min;
    return Math.floor(number);
}

let rand = randomNumber(1, 50);

while (rand !== 10) {
    console.log(rand);
    rand = randomNumber(1, 50);
}

console.log(rand);