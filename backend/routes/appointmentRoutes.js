const express = require('express');
const { createAppointment, getAppointment, listAppointments } = require('../services/dynamoService');

const router = express.Router();

// Create an appointment
router.post('/', async (req, res, next) => {
    try {
        const { patientName, doctorName, date } = req.body;
        const response = await createAppointment({ patientName, doctorName, date });
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
});

// Get an appointment by ID
router.get('/:id', async (req, res, next) => {
    try {
        const response = await getAppointment(req.params.id);
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
});

// List all appointments
router.get('/', async (req, res, next) => {
    try {
        const response = await listAppointments();
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
