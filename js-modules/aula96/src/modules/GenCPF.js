import { ValidaCpf } from "./ValidaCpf.js";

export class GenCPF {
  constructor() {
    this.validaCpf = new ValidaCpf();
  }

  formattedCpf(cpf) {
    return cpf
      .split("")
      .map((char, index) => {
        if (index === 2 || index === 5) {
          return char + ".";
        } else if (index === 8) {
          return char + "-";
        } else {
          return char;
        }
      })
      .join("");
  }

  generateCpf() {
    let cpf = "";
    for (let i = 0; i < 9; i++) {
      cpf += Math.floor(Math.random() * 9);
    }

    const firstDigit = this.validaCpf.validateDigits(cpf);
    cpf += firstDigit;

    const secondDigit = this.validaCpf.validateDigits(cpf);
    cpf += secondDigit;

    return this.formattedCpf(cpf);
  }
}
