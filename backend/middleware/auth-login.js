const {
  models: { User },
} = require("../models");

const loginCheck = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: { email } }).then((user) => {
    // Not a good way to verify
    // Vulnerable to timing attacks
    if (user.email === email && user.password === password) {
      req.session.user = user;
      req.session.authorized = true;
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  });
};

module.exports = loginCheck;
