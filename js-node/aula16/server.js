require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    const sessionOptions = session({
      secret: process.env.SESSION_SECRET,
      store: MongoStore.create({
        mongoUrl: process.env.CONNECTIONSTRING
      }),
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
      },
    });

    app.use(sessionOptions);
    app.use(flash());
    app.use(middleware);
    app.use(routes);

    app.emit('ok'); // Sinaliza que o app está pronto
  })
  .catch(err => console.log(err));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const middleware = require('./src/middlewares/middleware.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

// renderizaçao
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.on('ok', () => {
  app.listen(3000, () => {
    console.log('🚀 Servidor rodando em: http://localhost:3000');
  });
})

