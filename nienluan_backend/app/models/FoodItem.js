const mongoose = require('mongoose')

const fooditemSchema = new mongoose.Schema({
    foodID: {
        type: mongoose.Types.ObjectId,
        ref: 'Food'
    },
    number: {
        type: Number
    },
    total: {
        type: Number
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    booked: {
        type: Boolean,
        default: false
    }
})

const FoodItem = mongoose.model('FoodItem', fooditemSchema);

module.exports = FoodItem;