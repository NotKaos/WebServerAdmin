const express = require("express");
const app = express();
const requestTime = require("./backend/middleware/request-time");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const isAuth = require("./backend/middleware/is-auth");

require("dotenv").config();

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
app.use(cookieParser());
app.use(requestTime);

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);

const root = require("./backend/routes/root");
const register = require("./backend/routes/register");
const login = require("./backend/routes/login");
const logout = require("./backend/routes/logout");

app.use("/", root);
app.use("/register", register);
app.use("/login", login);
app.use("/logout", logout);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.use((req, res, next) => {
  next(createError(404));
});
