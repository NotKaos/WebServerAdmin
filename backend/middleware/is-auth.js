const isAuth = (req, res, next) => {
  if (req.session.user_id !== undefined) {
    next();
  }
};

module.exports = isAuth;
