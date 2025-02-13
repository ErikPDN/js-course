import validator from 'validator';

export default class Contact {
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
    const nameInput = el.querySelector('input[name="name"]');
    const emailInput = el.querySelector('input[name="email"]');
    const phoneInput = el.querySelector('input[name="phone"]');
    const csrfInput = el.querySelector('input[name="_csrf"]');
    let error = false;

    this.clearErrors();

    // Validação do Nome
    if (this.isEmpty(nameInput.value) || nameInput.value.length < 2) {
      this.createError(nameInput, 'Name must be at least 2 characters long.');
      error = true;
    }

    // Validação de Email ou Telefone
    if (this.isEmpty(emailInput.value) && this.isEmpty(phoneInput.value)) {
      this.createError(emailInput, 'At least one of Email or Phone is required.');
      error = true;
    }

    // Validação de Email
    if (!this.isEmpty(emailInput.value) && !validator.isEmail(emailInput.value)) {
      this.createError(emailInput, 'Invalid email address.');
      error = true;
    }

    // Validação de Telefone
    if (!this.isEmpty(phoneInput.value) && !validator.isMobilePhone(phoneInput.value, 'any')) {
      this.createError(phoneInput, 'Invalid phone number.');
      error = true;
    }

    // Validação de CSRF Token
    if (this.isEmpty(csrfInput.value)) {
      this.createError(csrfInput, 'CSRF token is missing.');
      error = true;
    }

    // Envio do Formulário
    if (!error) {
      console.log('Form submitted successfully:', nameInput.value, emailInput.value, phoneInput.value);
      el.submit();
    }
  }

  isEmpty(value) {
    return value === null || value === '';
  }

  createError(input, message) {
    const errorParagraph = document.createElement('p');
    errorParagraph.innerText = message;
    errorParagraph.classList.add('text-danger', 'mt-2');
    input.classList.add('is-invalid');
    input.insertAdjacentElement('afterend', errorParagraph);
  }

  clearErrors() {
    const errorMessages = this.form.querySelectorAll('.text-danger');
    errorMessages.forEach(error => error.remove());

    const invalidFields = this.form.querySelectorAll('.is-invalid');
    invalidFields.forEach(field => field.classList.remove('is-invalid'));
  }
}
