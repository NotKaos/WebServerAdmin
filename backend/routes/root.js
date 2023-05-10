const express = require("express");
const router = express.Router();
const path = require("path");
const { user, auth } = require("../controller");


const home = "../../public/index.html";

router.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, home));
  auth.login(req, res);
});

module.exports = router;
