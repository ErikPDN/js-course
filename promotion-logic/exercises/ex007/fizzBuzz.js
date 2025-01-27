function fizzBuzz(number) {
    if (typeof number !== 'number') return "Não é um number";

    const isDivBy3 = number % 3 === 0;
    const isDivBy5 = number % 5 === 0;

    if (isDivBy3 && isDivBy5) return "FizzBuzz";
    else if (isDivBy3) return "Fizz";
    else if (isDivBy5) return "Buzz";
    else return number;
}


function genRandomNums(min, max) {
    const number = Math.random() * (max - min) + min;
    return Math.floor(number);
}

let randomNumber = genRandomNums(1, 100);
console.log(randomNumber);
const result = fizzBuzz(randomNumber);
console.log(result);


