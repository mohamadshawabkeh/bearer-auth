'use strict';

const bcrypt = require('bcrypt');
const User = require('../models/users.model');

const signupAuth = async (req, res) => {
        let username = req.body.username;
        let hashedPassword = await bcrypt.hash(req.body.password, 5);
        const record = await User.create({
            username: username,
            password: hashedPassword
        });
        res.status(201).json(record);
};

module.exports = signupAuth;
