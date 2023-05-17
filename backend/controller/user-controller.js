const bcrypt = require("bcrypt");
const {
  models: { User, Department },
} = require("../models");

const auth = require("../middleware/auth-login");

module.exports = {
  newUser: (req, res) => {
    const { username, email, password, department } = req.body;
    let userData;

    bcrypt
      .genSalt(10)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hashedPassword) => {
        return User.create({
          username,
          email,
          password: hashedPassword,
        });
      })
      .then((user) => {
        userData = user;
        return Department.findOne({
          where: { department: department.toUpperCase() },
        });
      })
      .then((department) => {
        userData.addDepartment(department);
        res.sendStatus(201);
      })
      .catch((err) => {
        res.status(500).send(err.message);
        console.log(err);
      });
  },
  login: (req, res) => {
    auth(req, res);
  },
};
