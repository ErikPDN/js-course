module.exports = (req, res, next) => {
  res.locals.user = {
    _id: 1,
    username: 'FakeUser',
  };
  next();
};
