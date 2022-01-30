const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlenght: 50,
  },
  email: {
    type: String,
    trim: true, // .trim()  같은
    unique: 1, // 유니크하게
  },
  password: {
    type: String,
    minlength: 5,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    // 토큰 유효 시간
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
