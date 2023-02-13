const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.route("/user/signup")
    .post(userController.signUp);

router.route("/user/signin")
    .post(userController.signIn);

module.exports = router;
