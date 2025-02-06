require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('ok');
  })
  .catch(err => console.log(err));

const routes = require('./routes');
const path = require('path');
const middleware = require('./src/middlewares/middleware.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(middleware);
app.use(routes);

app.on('ok', () => {
  app.listen(3000, () => {
    console.log('🚀 Servidor rodando em: http://localhost:3000');
  });
})

