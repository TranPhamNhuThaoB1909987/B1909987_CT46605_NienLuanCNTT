const User = require("../models/User");
const Food = require("../models/Food");

const FoodItem = require("../models/FoodItem");

exports.addFood = async (req, res, next) => {
  const food = await Food.findById(req.body.foodID);
  const totalPrice = food.price * req.body.number;
  const fooditem = new FoodItem({
    foodID: req.body.foodID,
    number: req.body.number,
    total: totalPrice,
  });
  const user = await User.findById(req.body.userID);
  user.fooditems.push(fooditem._id);
  await fooditem.save();
  await user.save();
  return res.send(fooditem);
};
