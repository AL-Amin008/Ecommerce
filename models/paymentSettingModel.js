const mongoose = require('mongoose');

const paymentSettingSchema = new mongoose.Schema({
  store_id: { type: String, required: true },
  store_passwd: { type: String, required: true },
  currency: { type: String, required: true },
  success_url: { type: String },
  fail_url: { type: String },
  cancel_url: { type: String },
  ipn_url: { type: String },
  init_url: { type: String },
});

const PaymentSettingModel = mongoose.model('PaymentSetting', paymentSettingSchema);

module.exports = PaymentSettingModel;
