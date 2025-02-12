const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const { authMiddleware } = require('./src/middlewares/middleware');

// rotas da home
route.get('/', authMiddleware, homeController.index);

// rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/signin', loginController.login);
route.get('/login/logout', loginController.logout);


module.exports = route;
