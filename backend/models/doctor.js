const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: false // prevent auto generation of ObjectId so you can pass your own
  },
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String
  }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
