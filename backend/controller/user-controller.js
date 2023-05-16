const {
  models: { User, Department },
} = require("../models");

const auth = require("../middleware/auth-login");

module.exports = {
  newUser: (req, res) => {
    const { username, email, password, department } = req.body;
    let userData;
    User.create({
      username,
      email,
      password,
    })
      .then((user) => {
        userData = user;
        return Department.findOne({
          where: { department: department.toUpperCase() },
        });
      })
      .then((department) => {
        userData.addDepartment(department);

        console.log(req.session);
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
