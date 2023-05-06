const express = require("express");
const app = express();
const morgan = require("morgan");
const defaultDepartments = require("./backend/middleware/default-departments");

const PORT = process.env.PORT || 3000;

const db = require("./backend/models");
db.sequelize
  .sync()
  .then(() => {
    defaultDepartments();
  })
  .catch((err) => {
    console.log(err);
  });

app.use(morgan("dev"));
root = require("./backend/routes/root");

app.use("/", root);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
