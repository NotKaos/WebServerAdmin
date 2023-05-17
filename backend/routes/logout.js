const express = require("express");
const router = express.Router();
const path = require("path");
const { user } = require("../controller");

router.get("/", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("There was an error");
    }
  });

  res.clearCookie("connect.sid");
  res.sendStatus(200);
});

module.exports = router;
