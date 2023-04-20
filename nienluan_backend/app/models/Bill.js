const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
    fooditems: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'FoodItem'
        }
    ],
    isaccepted: {
        type: Boolean,
        default: false
    },
    createAtTime: {
        type: Date
    },
    totalPrice: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;