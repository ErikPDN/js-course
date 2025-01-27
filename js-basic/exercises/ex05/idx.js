const name = prompt('Digite seu nome completo:');

// Respostas 
let lengthName = name.replace(/ /g, "").length;
let secondLetter = name.charAt(1);
let firstIdxAppearance = name.toLowerCase().indexOf("e");
let lastIdxAppearance = name.toLowerCase().lastIndexOf("e");
let lastThreeLetters = name.slice(-3);
let lastName = name.split(" ")
let nameToUpperCase = name.toUpperCase();
let nameToLowerCase = name.toLowerCase();

document.body.innerHTML += `Seu nome é: ${name}<br />`;
document.body.innerHTML += `Seu nome tem ${lengthName} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${secondLetter} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra E no seu nome? ${firstIdxAppearance} <br />`;
document.body.innerHTML += `Qual o último índice da letra E no seu nome? ${lastIdxAppearance} <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${lastThreeLetters} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${lastName}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nameToUpperCase} <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nameToLowerCase} <br />`;

let lengthNameWithoutSpaces = name.replace(/ /g, "").length;
console.log(lengthNameWithoutSpaces); // Exibe o número total de letras (sem espaços)





