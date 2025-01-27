class ValidaCpf {
  constructor(cpf) {
    this.cpf = cpf;
  }

  validateCpf(cpf) {
    const formattedCpf = Array.from(cpf)
      .filter(char => !isNaN(char) && char !== ' ')
      .join("");

    if (formattedCpf.length !== 11) {
      console.log("Cpf doesn't have 11 letters");
    }

    if (formattedCpf.match("(\\d)\\1{10}")) {
      console.log("Cpf can't have all letters the same");
    }

    const cpfWithoutVerifyDigits = formattedCpf.substring(0, 9);
    const firstDigit = this.validateDigits(cpfWithoutVerifyDigits);
    const cpfWithFirstDigit = cpfWithoutVerifyDigits + firstDigit;
    const secondDigit = this.validateDigits(cpfWithFirstDigit);

    const validatedCpf = cpfWithoutVerifyDigits + firstDigit + secondDigit;
    console.log(validatedCpf);

    return formattedCpf === validatedCpf;
  }

  validateDigits(cpf) {
    const result = [...cpf].reduce(
      (acc, char, index) => acc + parseInt(char) * (cpf.length + 1 - index),
      0
    );

    const rest = result % 11;
    return rest < 2 ? 0 : 11 - rest;
  }
}

const cpf1 = new ValidaCpf("701.219.631-95");
console.log(cpf1.validateCpf(cpf1.cpf));

