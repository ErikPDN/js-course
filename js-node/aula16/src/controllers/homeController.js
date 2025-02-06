exports.homePage = (req, res) => {
  res.render('index', {
    title: 'Dynamic Page',
    numbers: [0, 1, 2, 3, 4]
  });
  return;
};

exports.postedHomePage = (req, res) => {
  res.send(req.body);
  return;
}
