const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  isRegistered: { type: Boolean, default: false },
  registrationId: { type: String, unique: true },
  profileImage: { type: String, default: "" },
  isVerified: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
