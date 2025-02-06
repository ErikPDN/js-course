exports.homePage = (req, res) => {
  res.render('index');
};

exports.postedHomePage = (req, res) => {
  res.send('Obrigado por enviar o formulário');
}
