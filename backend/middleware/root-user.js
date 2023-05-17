const {
  models: { User, Department, Users_Department },
} = require("../models");

module.exports = () => {
  const user = User.findOne({ where: { username: "root" } });
  if (!user) {
  }
};
