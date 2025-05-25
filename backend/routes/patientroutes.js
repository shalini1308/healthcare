const express = require('express');
const router = express.Router();
const {
  registerPatient,
  getAllPatients,
  getPatientById,
  addMultiplePatients,
  deleteAllPatients,
  updatePatient,
  deletePatient
} = require('../controllers/patientcontroller');

// Create
router.post('/', registerPatient);

// Read
router.get('/', getAllPatients);
router.get('/:id', getPatientById);

// Bulk create
router.post('/bulk', addMultiplePatients);

// Update
router.put('/:id', updatePatient);

// Delete
router.delete('/:id', deletePatient);
router.delete('/', deleteAllPatients);

module.exports = router;



