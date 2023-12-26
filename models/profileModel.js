const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cus_add: { type: String },
  cus_city: { type: String },
  cus_country: { type: String },
  cus_fax: { type: String },
  cus_name: { type: String },
  // ... (other fields for shipping details)
});

const ProfileModel = mongoose.model('Profile', profileSchema);

module.exports = ProfileModel;
