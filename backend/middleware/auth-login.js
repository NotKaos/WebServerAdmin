const {
    models: { User, Department },
  } = require("../models");
  
  module.exports = {
    login: (req, res) => {
     //const { email, password } = req.body;
      let email = "kim@gmail.com"
      User.findOne({ where: { email } }).then((user) => {
        console.log(user.user_id); // get userid from "user.user_id"
        if (!user) {
          return res.status(403).send("Invalid username or password");
        }
  
        if (user.password !== password) {
          return res.status(403).send("Invalid username or password");
        }

  
        res.send("Logged in successfully");
      });
    },
  }