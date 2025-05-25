const express = require('express');
const router = express.Router();

const {
  registerDoctor,
  getAllDoctors,
  getDoctorById,
  addMultipleDoctors,
  deleteAllDoctors,
  updateDoctor,
  deleteDoctor
} = require('../controllers/doctorcontroller');

// Bulk and All Delete first
router.post('/bulk', addMultipleDoctors);
router.delete('/all', deleteAllDoctors);

// Single Doctor CRUD
router.post('/', registerDoctor);
router.get('/', getAllDoctors);
router.get('/:id', getDoctorById);
router.put('/:id', updateDoctor);   // ✅ Add Update
router.delete('/:id', deleteDoctor); // ✅ Add Delete

module.exports = router;

