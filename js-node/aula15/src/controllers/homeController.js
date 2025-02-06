exports.homePage = (req, res) => {
  req.flash('info', 'Olá, eu sou um flash.');
  req.flash('error', 'Erro! Algo deu errado.');
  req.flash('success', 'Sucesso! Você fez tudo certo.');
  res.render('index');
};

exports.postedHomePage = (req, res) => {
  res.send(req.body);
}
