const express = require("express");
const { login, signup, addFeedback} = require("../controller/user.js");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/addfeedback",addFeedback);

module.exports = router;
