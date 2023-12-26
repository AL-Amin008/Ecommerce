const mongoose = require('mongoose');

const productDetailsSchema = new mongoose.Schema({
  img1: { type: String },
  img2: { type: String },
  img3: { type: String },
  img4: { type: String },
  des: { type: String },
  color: { type: String },
  size: { type: String },
  productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
});

const ProductDetailsModel = mongoose.model('ProductDetails', productDetailsSchema);

module.exports = ProductDetailsModel;
