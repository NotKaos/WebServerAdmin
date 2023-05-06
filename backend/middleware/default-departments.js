const {
  models: { Department },
} = require("../models");

module.exports = () => {
  Department.count().then((data) => {
    if (data < 4) {
      Department.bulkCreate([
        {
          department: "COMPUTER SCIENCE",
        },
        {
          department: "BIOLOGY",
        },
        {
          department: "ENGLISH",
        },
        {
          department: "PHILOSOPHY",
        },
      ]);
    }
  });
};
