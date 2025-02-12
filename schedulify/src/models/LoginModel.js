const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async register() {
    this.validate();
    if (this.errors.length > 0) return;

    await this.verifyIfEmailAlreadyExists(this.body.email);

    if (this.errors.length > 0) return;

    const salt = bcrypt.genSaltSync();
    this.body.password = bcrypt.hashSync(this.body.password, salt);

    try {
      this.user = await LoginModel.create(this.body);
    } catch (e) {
      console.log(e);
    }
  }

  validate() {
    this.cleanUp();

    if (!validator.isEmail(this.body.email)) {
      this.errors.push('Invalid e-mail');
    }

    if (this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push('The password must be between 3 and 50 characters');
    }

  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password,
    };
  }

  async verifyIfEmailAlreadyExists(email) {
    const emailRes = await LoginModel.findOne({ email });
    if (emailRes) {
      this.errors.push('E-mail already exists');
    }
  }
}

module.exports = Login;
