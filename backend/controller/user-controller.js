const {
  models: { User },
} = require("../models");

module.exports = {
  newUser: (req, res) => {
    // const { username, email, password } = req.body;
    username = "kim";
    email = "kim@gmail.com";
    password = "kimmy";
    department = "computer science";

    User.create({
      username,
      email,
      password,
      department,
    })
      .then((user) => {
        res.send("User sucessfully registered");
      })
      .catch((err) => {
        res.status(500).send(err.message);
        console.log(err);
      });
  },

  setDepartment: (req, res) => {},
};
