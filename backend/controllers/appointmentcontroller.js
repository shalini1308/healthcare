const Appointment = require('../models/appointment');

// Create a new appointment with validation
const createAppointment = async (req, res) => {
  try {
    const { doctorName, patientName, date, time, reason } = req.body;

    // Check if doctor already has an appointment at the same date and time
    const existingAppointment = await Appointment.findOne({ doctorName, date, time });

    if (existingAppointment) {
      return res.status(400).json({ error: 'Doctor already has an appointment at this time.' });
    }

    // If no conflict, create new appointment
    const newAppointment = new Appointment({ doctorName, patientName, date, time, reason });
    await newAppointment.save();
    res.status(201).json(newAppointment);

  } catch (error) {
    console.error('Error saving appointment:', error);
    res.status(400).json({ error: error.message });
  }
};

// Get all appointments
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: error.message });
  }
};

// Delete an appointment
const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    await Appointment.findByIdAndDelete(id);
    res.json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createAppointment, getAllAppointments, deleteAppointment };
