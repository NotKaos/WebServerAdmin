module.exports = (sequelize, Sequelize) => {
  const User_Department = sequelize.define("user_department", {
    user_department_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
  });

  return User_Department;
};
