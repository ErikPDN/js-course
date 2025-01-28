export class GenPassword {
  constructor(passwordLength, upperCase = false,
    lowerCase = false, numbers = false, specialCharacters = false) {
    this.passwordLength = passwordLength;
    this.numbers = numbers;
    this.upperCase = upperCase;
    this.lowerCase = lowerCase;
    this.specialCharacters = specialCharacters;
    this.password = "";
  }

  generatePassword() {
    if (this.passwordLength < 8 || this.passwordLength > 128) {
      alert("Password length must be between 8 and 128 characters");
      return;
    }

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/";

    let chars = "";
    let requiredChars = [];

    if (this.upperCase) {
      chars += upperCaseChars;
      requiredChars.push(this.getRandomChar(upperCaseChars));
    }

    if (this.lowerCase) {
      chars += lowerCaseChars;
      requiredChars.push(this.getRandomChar(lowerCaseChars));
    }

    if (this.numbers) {
      chars += numberChars;
      requiredChars.push(this.getRandomChar(numberChars));
    }

    if (this.specialCharacters) {
      chars += specialChars;
      requiredChars.push(this.getRandomChar(specialChars));
    }

    if (chars.length === 0) {
      alert("You must select at least one character type");
      return;
    }

    let remainingChars = this.passwordLength - requiredChars.length;
    let passwordArray = [...requiredChars];

    for (let i = 0; i < remainingChars; i++) {
      passwordArray.push(this.getRandomChar(chars));
    }

    this.password = this.shuffleArray(passwordArray).join("");
    return this.password;
  }

  getRandomChar(charSet) {
    return charSet[Math.floor(Math.random() * charSet.length)];
  }

  shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
}


