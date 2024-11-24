const Joi = require('joi');

// Validate Sign Up Input
const validateSignUp = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    next();
};

// Validate Confirm Sign Up Input
const validateConfirmSignUp = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        code: Joi.string().length(6).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    next();
};

// Validate Login Input
const validateLogin = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    next();
};

module.exports = {
    validateSignUp,
    validateConfirmSignUp,
    validateLogin,
};
