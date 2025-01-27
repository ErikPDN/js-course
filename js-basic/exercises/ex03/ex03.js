const num1 = parseInt(prompt("Digite um número"))

// console.log(parseInt("42"));         // 42
// console.log(parseInt("42px"));       // 42 (para no caractere não numérico)
// console.log(parseInt("  42  "));     // 42 (ignora espaços em branco no início)
// console.log(parseInt("101", 2));     // 5 (interpreta "101" como binário)
// console.log(parseInt("abc"));        // NaN (não consegue converter "abc" para um número)


const num2 = parseInt(prompt("Digite outro número"))
const result = num1 + num2;
alert(`O resultado é ${result}`)

// console.log(Number("42"));           // 42
// console.log(Number("3.14"));         // 3.14
// console.log(Number("42px"));         // NaN (não ignora caracteres não numéricos)
// console.log(Number("   42   "));     // 42 (ignora espaços em branco)
// console.log(Number(true));           // 1 (true é convertido para 1, false para 0)
// console.log(Number(null));           // 0
// console.log(Number(undefined));      // NaN (não pode converter undefined)
