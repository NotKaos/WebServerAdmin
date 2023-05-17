const isAuth = (req, res, next) => {
  console.log(req.session.user_id);
  if (req.session.user_id !== undefined) {
    next();
  } else {
    res.redirect("/");
  }
};

module.exports = isAuth;
