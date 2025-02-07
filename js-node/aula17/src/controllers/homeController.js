exports.homePage = (req, res) => {
  res.render('index', {
    title: 'Dynamic Page'
  });
};

exports.postedHomePage = (req, res) => {
  res.send(req.body);
}
