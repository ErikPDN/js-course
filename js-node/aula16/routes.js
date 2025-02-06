const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

// rotas da home
route.get('/', homeController.homePage);
route.post('/', homeController.postedHomePage);

// rotas de contato 
route.get('/contact', contactController.contactPage);

module.exports = route;
