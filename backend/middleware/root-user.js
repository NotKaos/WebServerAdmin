const bcrypt = require("bcrypt");
const {
  models: { User, Department, Users_Department },
} = require("../models");

module.exports = () => {
  User.findOne({ where: { username: "root" } })
    .then((rootUser) => {
      if (!rootUser) {
        return bcrypt
          .hash("root", 10) // Hash the password
          .then((hashedPassword) => {
            return User.create({
              username: "root",
              email: "root@gmail.com",
              password: hashedPassword,
            });
          });
      } else {
        return Promise.resolve(rootUser);
      }
    })
    .then((createdUser) => {
      return Department.findAll().then((departments) => {
        const departmentIds = departments.map(
          (department) => department.department_id
        );

        const userDepartments = departmentIds.map((departmentId) => ({
          user_id: createdUser.user_id,
          department_id: departmentId,
        }));

        return Users_Department.bulkCreate(userDepartments);
      });
    })
    .catch((err) => {});
};
