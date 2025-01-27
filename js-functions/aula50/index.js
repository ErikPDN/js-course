function func({ name, lastName, yo}) {
    console.log(name, lastName, yo)
}

function func2(operator, count, ...numbers) {
    if (operator === '+') {
        count = 0;
        for (let num of numbers) {
            count += num;
        }
        return count;
    } else if (operator === '-') {
        count = 0;
        for (let num of numbers) {
            count -= num;
        }
        return count;
    }
}

result = func2('+', 0, 1, 2, 3, 4, 5);
console.log(result)


func({name: "Erik", lastName: "Pereira", yo: 20});  // Não da erro   