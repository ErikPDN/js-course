exports.homePage = (req, res, next) => {
  res.render('index');
};

exports.postedHomePage = (req, res) => {
  res.send(req.body);
}
