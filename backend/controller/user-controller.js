const {
  models: { User, Department },
} = require("../models");

module.exports = {
  newUser: (req, res) => {
    //const { username, email, password, department } = req.body;
    username = "kim";
    email = "kim@gmail.com";
    password = "kimmy";
    department = "philosophy";

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
        res.send("User sucessfully registered");
      })
      .catch((err) => {
        res.status(500).send(err.message);
        console.log(err);
      });
  },
};
