let factorial = 1;

for (let i = 1; i <= 5; i++) {
    factorial *= i;
}

console.log(factorial);

function sumIfIsEven(n) {
    let sum = 0;

    for(let i = 1; i <= n; i++) {
        sum += (i % 2 === 0) ? i : 0;
    }

    console.log(sum);
}

sumIfIsEven(100);

