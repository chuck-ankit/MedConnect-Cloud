const express = require('express');
const { signUpUser, confirmSignUp, loginUser } = require('../services/authService');

const router = express.Router();

// Sign Up
router.post('/signup', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const response = await signUpUser(email, password);
        res.status(200).json({ message: 'Sign up successful', data: response });
    } catch (err) {
        next(err);
    }
});

// Confirm Sign Up
router.post('/confirm-signup', async (req, res, next) => {
    try {
        const { email, code } = req.body;
        const response = await confirmSignUp(email, code);
        res.status(200).json({ message: 'Confirmation successful', data: response });
    } catch (err) {
        next(err);
    }
});

// Login
router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const response = await loginUser(email, password);
        res.status(200).json({ message: 'Login successful', data: response });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
