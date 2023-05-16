module.exports = (sequelize, Sequelize) => {
  const Session = sequelize.define(
    "session",
    {
      sid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      sess: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      expires: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );

  return Session;
};
