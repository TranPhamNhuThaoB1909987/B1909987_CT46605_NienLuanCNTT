const User = require("../models/User");
const JWT = require("jsonwebtoken");
const config = require("../config/index");
const time = 60 * 60 * 3;
function createToken(userId) {
  return JWT.sign(
    {
      data: userId,
    },
    config.key,
    { expiresIn: time }
  );
}

exports.signUp = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(403).json({ message: "email da duoc dang ky" });
  } else {
    const newUser = new User(req.body);
    const token = createToken(newUser._id);
    res.cookie("jwt", token, { maxAge: time });
    await newUser.save();
    return res.status(200).json({ user: newUser, token: token });
  }
};

exports.signIn = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    if (user.password === req.body.password) {
      const token = createToken(user._id);
      res.cookie("jwt", token, { maxAge: time });
      return res.status(200).json({ message: "dang nhap thanh cong" });
    }else {
      return res.status(400).json({ message: "mat khau khong trung khop" });
    }
  } else {
    return res.status(403).json({message: "email chua duoc dang ky"});
  }
};
