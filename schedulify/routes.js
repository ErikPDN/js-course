const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contactController = require('./src/controllers/contactController');

const { authMiddleware } = require('./src/middlewares/middleware');

// rotas da home
route.get('/', authMiddleware, homeController.index);

// rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/signin', loginController.login);
route.get('/login/logout', loginController.logout);

// Rotas de contato
route.get('/contact/index', authMiddleware, contactController.index);
route.post('/contact/create', authMiddleware, contactController.create);
route.get('/contact/index/:id', authMiddleware, contactController.editIndex);
route.post('/contact/edit/:id', authMiddleware, contactController.edit);
route.get('/contact/delete/:id', authMiddleware, contactController.delete);


module.exports = route;
