const express = require('express')  // web server

const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/contact', (req, res) => {
  res.send('Contact page');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  console.log('Request received:', req.url);
  next();
})
