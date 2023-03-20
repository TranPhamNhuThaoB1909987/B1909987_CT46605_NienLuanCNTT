const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.route("/user/signup")
    .post(userController.signUp);

router.route("/user/signin")
    .post(userController.signIn);

router.route("/user/signout")
    .post(userController.signOut);

module.exports = router;
