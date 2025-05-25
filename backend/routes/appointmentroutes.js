const express = require('express');
const router = express.Router();
const { createAppointment, getAllAppointments, deleteAppointment } = require('../controllers/appointmentcontroller');

// Create a new appointment
router.post('/', createAppointment);

// Get all appointments
router.get('/', getAllAppointments);

// Delete an appointment by ID
router.delete('/:id', deleteAppointment);

module.exports = router;
