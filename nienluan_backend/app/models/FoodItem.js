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
    }
})

const FoodItem = mongoose.model('FoodItem', fooditemSchema);

module.exports = FoodItem;