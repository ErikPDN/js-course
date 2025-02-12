exports.middleware = (req, res, next) => {
  res.locals.errors = req.flash('errors');
  res.locals.successes = req.flash('successes');
  res.locals.user = req.session.user;
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if (err) {
    return res.render('404');
  }
  next();
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};

exports.authMiddleware = (req, res, next) => {
  if (!req.session.user) {
    req.flash('errors', 'You must be logged in to access this page.');
    return res.redirect('/login/index');
  }
  next(); // Se estiver logado, continua para a próxima função
}

