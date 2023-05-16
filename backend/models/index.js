const config = require("../config/db-config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,
});

const db = {};

db.sequelize = sequelize;
db.models = {};

db.models.User = require("./user-model")(sequelize, Sequelize.DataTypes);
db.models.Department = require("./department-model")(
  sequelize,
  Sequelize.DataTypes
);
db.models.Users_Department = require("./users-department-model")(
  sequelize,
  Sequelize.DataTypes
);
db.models.Session = require("./session-model")(sequelize, Sequelize.DataTypes);

const User = db.models.User;
const Department = db.models.Department;
const Users_Department = db.models.Users_Department;

User.belongsToMany(Department, {
  through: Users_Department,
  foreignKey: "user_id",
});
Department.belongsToMany(User, {
  through: Users_Department,
  foreignKey: "department_id",
});

module.exports = db;
