class ValidaCpf {
  constructor(cpf) {
    this.cpf = cpf;
  }

  validateCpf() {
    const formattedCpf = Array.from(this.cpf)
      .filter(char => !isNaN(char) && char !== ' ')
      .join("");

    if (formattedCpf.length !== 11) {
      console.log("Cpf doesn't have 11 letters");
      return false;
    }

    if (formattedCpf.match("(\\d)\\1{10}")) {
      console.log("Cpf can't have all letters the same");
      return false;
    }

    const cpfWithoutVerifyDigits = formattedCpf.substring(0, 9);
    const firstDigit = this.validateDigits(cpfWithoutVerifyDigits);
    const cpfWithFirstDigit = cpfWithoutVerifyDigits + firstDigit;
    const secondDigit = this.validateDigits(cpfWithFirstDigit);

    const validatedCpf = cpfWithoutVerifyDigits + firstDigit + secondDigit;

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



