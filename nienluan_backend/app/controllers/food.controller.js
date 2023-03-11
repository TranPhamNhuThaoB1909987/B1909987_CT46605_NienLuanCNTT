const Food = require("../models/Food");

exports.createFood = (req, res, next) => {
    const food = new Food(req.body);
    food.save();
    res.send(food);
}

exports.getAllFoods = async (req, res, next ) => {
    const foods = await Food.find({});
    return res.send(foods);
}