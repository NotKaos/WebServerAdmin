const express = require("express");
const router = express.Router();
const path = require("path");
const { user } = require("../controller");

router.get("/", (req, res, next) => {
  req.session.destroy();
});

module.exports = router;
