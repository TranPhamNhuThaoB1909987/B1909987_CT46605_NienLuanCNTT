const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    sdt: {
        type: String
    },
    address: {
        type: String
    },
    name: {
        type: String
    },
    role: {
        type: String,
        default: 'guest'
    },
    userFoods: [{
        type: mongoose.Types.ObjectId, 
        ref: 'User'
    }]
})

const User = mongoose.model('User', userSchema);

module.exports = User;