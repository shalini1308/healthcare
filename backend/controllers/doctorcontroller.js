const Doctor = require('../models/doctor');

// Register a new doctor
const registerDoctor = async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    const savedDoctor = await newDoctor.save();
    res.status(201).json(savedDoctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get doctor by ID
const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add multiple doctors
const addMultipleDoctors = async (req, res) => {
  try {
    const inserted = await Doctor.insertMany(req.body);
    res.status(201).json(inserted);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete all doctors
const deleteAllDoctors = async (req, res) => {
  try {
    await Doctor.deleteMany();
    res.status(200).json({ message: 'All doctors deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Existing controllers...

// Update doctor
const updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json(updatedDoctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//  Delete doctor
const deleteDoctor = async (req, res) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!deletedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  registerDoctor,
  getAllDoctors,
  getDoctorById,
  addMultipleDoctors,
  deleteAllDoctors,
  updateDoctor,
  deleteDoctor,
};

