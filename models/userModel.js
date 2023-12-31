const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
