const {
  models: { User, Department, Users_Department },
} = require("../models");

module.exports = () => {
  User.findOne({ where: { username: "root" } })
    .then((rootUser) => {
      if (!rootUser) {
        return User.create({
          username: "root",
          email: "root@gmail.com",
          password: "root",
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
