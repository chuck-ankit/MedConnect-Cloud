const express = require('express');
const { createMeeting, createAttendee } = require('../services/chimeService');

const router = express.Router();

// Create a new meeting
router.post('/', async (req, res, next) => {
    try {
        const meeting = await createMeeting();
        res.status(200).json(meeting);
    } catch (err) {
        next(err);
    }
});

// Add an attendee to a meeting
router.post('/:id/attendees', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const attendee = await createAttendee(id, userId);
        res.status(200).json(attendee);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
