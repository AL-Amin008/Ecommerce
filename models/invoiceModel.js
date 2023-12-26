const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  payable: { type: Number, required: true },
  cus_details: { type: String },
  ship_details: { type: String },
  tran_id: { type: String },
  val_id: { type: String },
  payment_status: { type: String },
  delivery_status: { type: String },
  total: { type: Number, required: true },
  vat: { type: Number },
});

const InvoiceModel = mongoose.model('Invoice', invoiceSchema);

module.exports = InvoiceModel;
