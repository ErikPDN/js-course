function factorial(number) {
    if (number <= 1) {
        return 1
    } else {
        return number * factorial(number - 1)
    }
}

const sqrt = n => n ** 0.5  // lambda function

console.log(factorial(5))
console.log(sqrt(10))