const User = require("../models/User");
const Food = require("../models/Food");
const FoodItem = require("../models/FoodItem");

exports.addFood = async (req, res, next) => {
  const food = await Food.findById(req.body.foodID);
  const totalPrice = food.price * req.body.number;
  console.log(req.body.foodID);
  console.log(req.body.userID);
  const found = await FoodItem.findOne({foodID: req.body.foodID, user: req.body.userID})
  console.log(found)
  if(found){
    found.number = found.number + req.body.number*1;
    console.log(typeof req.body.number)
    found.total = found.total + totalPrice;
    await found.save();
    return res.send(found);
  }else{
    const fooditem = new FoodItem({
      foodID: req.body.foodID,
      number: req.body.number*1,
      total: totalPrice,
      user: req.body.userID
    });
    const user = await User.findById(req.body.userID);
    user.fooditems.push(fooditem._id);
    await fooditem.save();
    await user.save();
    return res.send(fooditem);
  }
};

exports.removeFood = async (req, res, next) => {
  try {
    const fooditem = await FoodItem.findById(req.params.id).populate('user');
    let user = await User.findOne({_id: fooditem.user._id})
    let arr = user.fooditems.filter((food) => {
      return food._id != req.params.id;
    })

    console.log(arr);
    user.fooditems = arr;
    await user.save();
    await FoodItem.deleteOne({ _id: req.params.id });
    return res.send("success");
  } catch (error) {
    console.log(error);
  }
};
