require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');

const routes = require('./routes');
const { middleware, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware.js');

const app = express();

// 🔹 Conexão com o MongoDB
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log('🟢 Conectado ao banco de dados');
    app.emit('ok');
  })
  .catch(err => console.error('🔴 Erro ao conectar ao banco de dados:', err));

// 🔹 Configuração de segurança
app.use(helmet());

// 🔹 Middleware para receber dados de formulários
app.use(express.urlencoded({ extended: true }));

// 🔹 Servir arquivos estáticos (CSS, JS, imagens, etc.)
app.use(express.static(path.resolve(__dirname, 'public')));

// 🔹 Configuração de Sessão
const sessionOptions = session({
  secret: process.env.SESSION_SECRET,
  store: MongoStore.create({
    mongoUrl: process.env.CONNECTIONSTRING
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());
app.use(csrf());

// 🔹 Middleware Global
app.use(middleware);

// 🔹 Configuração do EJS para views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


// 🔹 Middleware de tratamento de erro de CSRF
app.use(checkCsrfError);

app.use(csrfMiddleware);

// 🔹 Definição de Rotas
app.use(routes);

// 🔹 Inicialização do Servidor
app.on('ok', () => {
  app.listen(3000, () => {
    console.log('🚀 Servidor rodando em: http://localhost:3000');
  });
});
