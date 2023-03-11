const express = require('express');
const router = express.Router();

const foodControoler = require('../controllers/food.controller');

router.route('/')
    .get(foodControoler.getAllFoods)
    .post(foodControoler.createFood)

module.exports = router;