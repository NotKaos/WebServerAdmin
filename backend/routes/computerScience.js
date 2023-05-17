const express = require("express");
const router = express.Router();
const path = require("path");
const { user } = require("../controller");

router.get("/", (req, res) => {
  console.log(req.session.user_id, req.session.department);
  res.sendStatus(200);
});

module.exports = router;
