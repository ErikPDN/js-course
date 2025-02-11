const Login = require('../models/LoginModel');

exports.index = (req, res) => {
  res.render('login');
};

exports.register = async function(req, res) {
  const login = new Login(req.body);
  await login.register();
  try {
    if (login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function() {
        return res.redirect(req.get('Referer') || '/login/index');
      });
      return;
    }

    req.flash('successes', 'User created successfully');
    req.session.save(function() {
      return res.redirect(req.get('Referer') || '/login/index');
    });
  } catch (e) {
    console.log(e);
    res.render('404');
  }
};
