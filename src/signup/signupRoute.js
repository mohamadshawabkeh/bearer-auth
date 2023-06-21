'use strict';
const express = require('express');
const signupAuth = require('./signupAuth');

const signUpRouter = express.Router();

signUpRouter.post('/signup', signupAuth);

module.exports = signUpRouter;
