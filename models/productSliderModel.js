const mongoose = require('mongoose');

const productSliderSchema = new mongoose.Schema({
  title: { type: String },
  des: { type: String },
  price: { type: Number },
  img: { type: String },
  productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
});

const ProductSliderModel = mongoose.model('ProductSlider', productSliderSchema);

module.exports = ProductSliderModel;
