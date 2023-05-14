const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const defaultDepartments = require("./backend/middleware/default-departments");

const PORT = process.env.PORT || 3001;

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
app.use(express.json());
app.use(cors());

const root = require("./backend/routes/root");
const register = require("./backend/routes/register");

app.use("/", root);
app.use("/register", register);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
