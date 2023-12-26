const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortDes: { type: String },
  price: { type: Number, required: true },
  discount: { type: Number },
  discountPrice: { type: Number },
  image: { type: String },
  star: { type: Number },
  stock: { type: Number },
  remark: { type: String },
  categoryID: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  brandID: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: true },
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
