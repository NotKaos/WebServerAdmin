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
// db.models.Department = require("./department-model")(sequelize, Sequelize.DataTypes);

module.exports = db;
