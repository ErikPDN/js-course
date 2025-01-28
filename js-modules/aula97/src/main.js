import { GenPassword } from './modules/GenPassword.js';

import './assets/css/style.css';

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.form-validate');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const passwordLength = document.querySelector('#length').value;
    const numberInput = document.querySelector('#numbers').checked;
    const upperCaseInput = document.querySelector('#uppercase').checked;
    const lowerCaseInput = document.querySelector('#lowercase').checked;
    const specialCharInput = document.querySelector('#symbols').checked;

    const genPasswordInstance = new GenPassword(
      passwordLength, upperCaseInput, lowerCaseInput, numberInput, specialCharInput
    );

    let resPassword = document.querySelector('.password-result');
    resPassword.innerHTML = genPasswordInstance.generatePassword();
  });
});
