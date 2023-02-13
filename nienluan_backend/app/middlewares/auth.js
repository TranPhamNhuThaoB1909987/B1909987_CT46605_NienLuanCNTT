const config = require('../config/index');
const jwt = require('jsonwebtoken');

const authLogin = function (req, res, next) {
    const token = req.cookies.token;
    if(token) {
        jwt.verify(token, config.key, (error, decodedToken) => {
            if(error) {
                console.log(error);
            }else{
                console.log(decodedToken);
                next();
            }
        })
    }else {
        throw new Error("Token failed");
    }
}

module.exports = {
    authLogin
}