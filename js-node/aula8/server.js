const express = require('express')
const app = express();

app.use(
  express.urlencoded({
    extended: true
  }))

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
      Nome do cliente: <input type="text" name="name">
      <button>submit</button>
    </form>
  `);
});

// ':' utilizados para valores dinamicos
app.get('/tests/:userId?', (req, res) => {  // ? utilizada para indicar que o valor pode nao estar
  console.log(req.params);
  console.log(req.query)
  res.send(req.params.userId);
});

app.post('/', (req, res) => {
  console.log(req.body)
  res.send(`${req.body.name}`);
});

app.get('/contact', (req, res) => {
  res.send('Contact page');
});

app.listen(3000, () => {
  console.log('Server listen on port 3000')
})
