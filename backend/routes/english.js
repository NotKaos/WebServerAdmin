const express = require("express");
const router = express.Router();
const path = require("path");
const departmentAuth = require("../middleware/auth-department");

router.get("/", (req, res) => {
  departmentAuth(req, res, "ENGLISH");
});

module.exports = router;
