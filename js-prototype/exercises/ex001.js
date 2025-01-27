// valida cpf

// function calculaDigitoVerificador1(cpf, multiplicador) {
//   let acumulador = 0;
//   for (let i = 0; i < cpf.length; i++) {
//     const char = cpf[i];
//     if (isNaN(char)) {
//       throw new Error("CPF deve conter apenas números");
//     }
//
//     acumulador += parseInt(char) * multiplicador;
//     multiplicador--;
//   }
//
//   const resto = acumulador % 11;
//   // console.log(resto);
//   return resto < 2 ? 0 : 11 - resto;
// }

function calculaDigitoVerificador(cpf) {
  const total = [...cpf].reduce(
    (acc, char, index) => acc + parseInt(char) * (cpf.length + 1 - index),
    0
  );

  const rest = total % 11;
  return rest < 2 ? 0 : 11 - rest;
}

function validaCpf(cpfOriginal) {
  const formattedCpf = Array.from(cpfOriginal)
    .filter(char => !isNaN(char) && char !== ' ')
    .join("");


  if (formattedCpf.length !== 11) {
    return false;
  }

  if (formattedCpf.match("(\\d)\\1{10}")) {
    return false;
  }

  const cpfSemDigitos = formattedCpf.slice(0, 9);
  const decimoDigito = calculaDigitoVerificador(cpfSemDigitos);
  const cpfComDecimoDigito = cpfSemDigitos + decimoDigito;
  const decimoPrimeiroDigito = calculaDigitoVerificador(cpfComDecimoDigito);

  const newCpf = cpfSemDigitos + decimoDigito + decimoPrimeiroDigito;
  console.log(newCpf);

  return newCpf === formattedCpf;
}

const cpf = "111.111.111-11";
console.log(validaCpf(cpf)); 
