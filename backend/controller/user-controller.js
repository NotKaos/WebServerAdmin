const {
  models: { User, Department },
} = require("../models");

module.exports = {
  newUser: (req, res) => {
    const { email, username, department, password } = req.body;

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
        res.sendStatus(201);
      })
      .catch((err) => {
        res.status(500).send(err.message);
        console.log(err);
      });
  },
};
