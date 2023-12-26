const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  color: { type: String },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
  size: { type: String },
});

const CartModel = mongoose.model('Cart', cartSchema);

module.exports = CartModel;
