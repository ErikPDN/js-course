import validator from 'validator';

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');
    let error = false;

    this.clearErrors();

    if (!validator.isEmail(emailInput.value)) {
      this.createError(emailInput, 'Invalid email address.');
      error = true;
    }

    if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      this.createError(passwordInput, 'Password must be between 3 and 50 characters long.');
      error = true;
    }

    if (!error) {
      // Se não houver erros, envie o formulário
      console.log('Form submitted successfully:', emailInput.value, passwordInput.value);
      el.submit();
    }
  }

  createError(input, message) {
    const errorParagraph = document.createElement('p');
    errorParagraph.innerText = message;
    errorParagraph.classList.add('text-danger', 'mt-2'); // Classes para estilo (Bootstrap)
    input.insertAdjacentElement('afterend', errorParagraph); // Insere após o campo
  }

  // Remove todas as mensagens de erro existentes
  clearErrors() {
    const errorMessages = this.form.querySelectorAll('.text-danger');
    errorMessages.forEach(error => error.remove());
  }
}
