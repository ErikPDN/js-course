let a = "A"; // B
let b = "B"; // C
let c = "C"; // A

function swap(a, b, c) {
    let temp = a;
    a = b;
    b = c;
    c = temp;

    console.log(a, b, c);
}

swap(a, b, c);

let a2 = "A"; // B
let b2 = "B"; // C
let c2 = "C"; // A

// atribuição via desestruturação
[a2, b2, c2] = [b2, c2, a2];
console.log(`A:${a2} B:${b2} C:${c2}`);

// o valor em si é imutável
// const str = "Erik";
// str = "João";
// console.log(str)

// armazena é uma referência à área da memória onde o array está
const nums = [1, 2, 3, 4, 5];
nums[0] = 2;
console.log(nums);

// não posso mudar a referencia do array
// let nums2;
// nums = nums2;
// console.log(nums);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const [firstNum, secondNum, ...rest] = numbers
console.log(firstNum, secondNum)
console.log(rest)

const [ , , , , fourthIdx] = numbers
console.log(fourthIdx);
