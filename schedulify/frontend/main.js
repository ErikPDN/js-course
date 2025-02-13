import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login.js';
import Contact from './modules/Contact.js';

const login = new Login('.formLogin');
const register = new Login('.formRegister');
const contact = new Contact('.contact-form');

login.init();
register.init();
contact.init();

// import './assets/css/style.css';

