module.exports = (sequelize, Sequelize) => {
  const Department = sequelize.define("department", {
    dep_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: { model: "user-model", key: "user_id" },
    },
    department: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Department;
};
