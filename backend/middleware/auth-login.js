const {
  models: { User, Users_Department, Department },
} = require("../models");

const loginCheck = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } }).then((user) => {
    // Not a good way to verify
    // Vulnerable to timing attacks
    if (user.email === email && user.password === password) {
      Users_Department.findAll({ where: { user_id: user.user_id } })
        .then((user_departments) => {
          if (user_departments.length > 0) {
            const departmentIds = user_departments.map(
              (user_department) => user_department.department_id
            );
            return Department.findAll({
              where: { department_id: departmentIds },
            });
          }
        })
        .then((departments) => {
          const departmentData = departments.map((dep) => ({
            department_id: dep.department_id,
            department: dep.department,
          }));
          req.session.department = departmentData;
          req.session.user_id = user.user_id;
          req.session.authorized = true;
          res.sendStatus(200);
        });
    } else {
      res.sendStatus(401);
    }
  });
};

module.exports = loginCheck;
