const {
  models: { User },
} = require("../models");

const loginCheck = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } }).then((user) => {
    if (user.email === email && user.password === password) {
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  });
};

module.exports = loginCheck;
