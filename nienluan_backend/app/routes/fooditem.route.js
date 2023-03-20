const express = require('express');
const router = express.Router();

const foodItemControoler = require('../controllers/fooditem.controller');

router.route('/')
    .post(foodItemControoler.addFood)

module.exports = router;