class ValidateForm {
  constructor() {
    this.form = document.querySelector('.form');
    this.events();
  }

  events() {
    this.form.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const validFields = this.isValidFields(event);
    const validPasswords = this.isValidPasswords(event);

    if (validFields && validPasswords) {
      alert('Formulário enviado');
      this.form.submit();
    }
  }

  isValidFields() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for (let field of this.form.querySelectorAll('.validate')) {
      const label = field.previousElementSibling.innerText;

      if (field.value.trim() === '') {
        valid = false;
        this.showErrorMessage(field, `Campo ${label} não pode estar vazio`);
      }

      if (field.classList.contains('cpf')) {
        if (!this.validateCpf(field)) valid = false;
      }

      if (field.classList.contains('usuario')) {
        if (!this.validateUser(field)) valid = false;
      }
    }

    return valid;
  }

  isValidPasswords(event) {
    let valid = true;

    const password = event.target.querySelector('.senha');
    const repeatPassword = event.target.querySelector('.repetir-senha');

    if (password.value !== repeatPassword.value) {
      valid = false;
      this.showErrorMessage(password, 'Senhas não são iguais');
      this.showErrorMessage(repeatPassword, 'Senhas não são iguais');
    }

    if (password.value.length < 6 || password.value.length > 12) {
      valid = false;
      this.showErrorMessage(password, 'Senha precisa estar entre 6 e 12 caracteres');
    }

    return valid;
  }

  validateCpf(field) {
    const cpf = new ValidaCpf(field.value);

    if (!cpf.validateCpf()) {
      console.log("Invalid CPF");
      this.showErrorMessage(field, 'CPF inválido');
      return false;
    }

    return true;
  }

  validateUser(field) {
    const user = field.value;
    if (user.length < 3 || user.length > 12) {
      this.showErrorMessage(field, 'Usuário precisa ter entre 3 e 12 caracteres');
      return false;
    }


    if (!user.match(/^[a-zA-Z0-9]+$/)) {
      this.showErrorMessage(field, 'Nome de usuário precisa conter apenas letras e/ou números');
      return false;
    }

    return true;
  }

  showErrorMessage(fileld, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    fileld.insertAdjacentElement('afterend', div);
  }
}
const validateForm = new ValidateForm();
