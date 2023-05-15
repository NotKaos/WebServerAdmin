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
};
