const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, default: '' },
  email: { type: String, default: '' },
  phone: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

const ContactModel = mongoose.model('Contact', ContactSchema);

class Contact {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.contact = null;
  }

  async create() {
    this.validate();
    if (this.errors.length > 0) return;

    try {
      this.contact = await ContactModel.create(this.body);
    } catch (error) {
      console.error('Database Error:', error);
      this.errors.push('Error creating contact');
    }
  }

  validate() {
    this.cleanUp();

    if (this.body.email && !validator.isEmail(this.body.email)) {
      this.errors.push('Invalid email');
    }

    if (!this.body.name) this.errors.push('Name is a required field');
    if (!this.body.email && !this.body.phone) {
      this.errors.push('Email or Phone is required');
    }
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    this.body = {
      name: this.body.name.trim(),
      lastName: this.body.lastName.trim(),
      email: this.body.email.trim(),
      phone: this.body.phone.trim()
    };
  }

  async edit(id) {
    if (typeof id !== 'string') return;
    this.validate();
    if (this.errors.length > 0) return;
    this.contact = await ContactModel.findByIdAndUpdate(id, this.body, { new: true });
  }

  static async getContactById(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) return null;
    return await ContactModel.findById(id);
  }

  static async deleteById(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) return null;
    return await ContactModel.findByIdAndDelete(id);
  }

  static async getContacts() {
    return await ContactModel.find().sort({ createdAt: -1 });
  }

}

module.exports = Contact;
