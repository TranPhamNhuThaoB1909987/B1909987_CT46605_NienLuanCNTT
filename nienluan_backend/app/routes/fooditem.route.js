const express = require("express");
const router = express.Router();

const foodItemController = require("../controllers/fooditem.controller");

router
  .route("/")
  .post(foodItemController.addFood)

router.route("/:id")
  .delete(foodItemController.removeFood);

module.exports = router;
