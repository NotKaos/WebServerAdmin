const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { username, authorized } = req.session;
  // console.log(username, authorized);
  if (authorized && username) {
    res.status(200).json({ username });
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
