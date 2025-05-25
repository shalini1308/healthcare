const Patient = require('../models/patient');

const registerPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addMultiplePatients = async (req, res) => {
  try {
    const patients = req.body;
    const inserted = await Patient.insertMany(patients);
    res.status(201).json(inserted);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteAllPatients = async (req, res) => {
  try {
    await Patient.deleteMany();
    res.status(200).json({ message: 'All patients deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update patient
const updatePatient = async (req, res) => {
  try {
    const updated = await Patient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ message: 'Patient not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete patient
const deletePatient = async (req, res) => {
  try {
    const deleted = await Patient.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Patient not found' });
    res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  registerPatient,
  getAllPatients,
  getPatientById,
  addMultiplePatients,
  deleteAllPatients,
  updatePatient,
  deletePatient
};
