const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    total: {
        type: Number,
        default: 0
    },
    ordered: false
})

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;