const express = require("express");
const router = express.Router();

const foodController = require("../controllers/food.controller");

router
  .route("/")
  .get(foodController.getAllFoods)
  .post(foodController.createFood);

router.route("/:id").get(foodController.getFoodByID);

module.exports = router;
