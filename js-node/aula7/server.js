const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/contact', (req, res) => {
  res.send('Contact page');
});

// Verifica se há um servidor rodando na porta antes de iniciar
const server = app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

// Fecha o servidor quando o Nodemon reiniciar
process.on('SIGTERM', () => {
  console.log('Fechando servidor...');
  server.close(() => {
    console.log('Servidor fechado!');
    process.exit(0);
  });
});
