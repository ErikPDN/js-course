let string = "Um texto"

// console.log(string.charAt(0))
// console.log(string.concat(" aleatorio"))
// console.log(`${string} aleatorio`)
// console.log(string.indexOf("texto"))  // A partir de que index começa a string passada
// console.log(string.lastIndexOf("o"))  // Busca do fim ao inicio
// console.log(string.replace("Um", "Dois"))

let frase = "O rato roeu a roupa do rei de roma"
console.log(frase.replaceAll("r", "d"))

// console.log(string.length - 3), ou seja, pega as ultimas três letras, se tiver, se não, pega só o que tem
console.log(frase.slice(-3))
console.log(frase.slice(32))
console.log(string.slice(-10))

console.log(frase.split(' '))
console.log(frase.split(' ', 3)) // pega os três primeros elementos que estão no array que a func devolve

