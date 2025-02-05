exports.homePage = (req, res) => {
  res.send(`
    <form action="/" method="POST">
      Nome do cliente: <input type="text" name="name">
      <button>submit</button>
    </form>
  `);
};

exports.postedHomePage = (req, res) => {
  res.send('Obrigado por enviar o formulário');
}
