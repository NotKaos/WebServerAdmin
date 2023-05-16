const {
  models: { User },
} = require("../models");

const loginCheck = (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);
  // User.findOne({ where: { email } }).then((user) => {
  //   if (user.email === email && user.password === password) {
  //     console.log("Auth successful");
  //     res.sendStatus(200);
  //   } else {
  //     console.log("Who is you");
  //     res.sendStatus(401);
  //   }
  // });
};

module.exports = loginCheck;
