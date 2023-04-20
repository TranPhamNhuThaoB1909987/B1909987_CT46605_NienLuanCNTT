const Bill = require('../models/Bill');
const User = require('../models/User');
const FoodItem = require('../models/FoodItem');

exports.createBill = async (req, res, next) => {
    try {
        const foundUser = await User.findOne({_id: req.params.id}).populate('fooditems');
        const bill = new Bill({
            user: req.params.id,
            createAtTime: new Date()
        })
        bill.fooditems = foundUser.fooditems;
        let total = 0;
        const reducer = (oldValue, newValue) => oldValue + newValue.total;
        bill.totalPrice = bill.fooditems.reduce(reducer, total);
        await bill.save();
        foundUser.fooditems = [];
        await foundUser.save();
        return res.send(bill);
    } catch (error) {
        return res.send(error.message);
    }
}

exports.deleteBill = async (req, res, next) => {
    try {
        const bill = await Bill.findById(req.params.id);
        await FoodItem.deleteMany({user: bill.user});
        await bill.deleteOne();
        return res.send("Deleted"); 
    } catch (error) {
        console.log(error)
    }
}

exports.getAllBillByUser = async (req, res, next) => {
    try {
        const bills = await Bill.find({user: req.params.id}).populate({
            path: 'fooditems',
            model: 'FoodItem',
            populate: {
                path: "foodID",
                model: "Food",
            },
        });
        return res.send(bills);
    } catch (error) {
        console.log(error.message);
    }
}