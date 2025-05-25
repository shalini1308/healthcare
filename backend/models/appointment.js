const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctorName: { type: String, required: true },
  patientName: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  reason: { type: String, required: true }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
