'use strict';
require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());
const signUpRouter = require('./signup/signupRoute');
const signInRouter = require('./Routes/signinRoute');
const secretStuffRouter = require('./Routes/secretstuff');

app.use(signUpRouter);
app.use(signInRouter);
app.use(secretStuffRouter);

app.get("/", (req,res)=>{
    res.send('Hello Home')
});

module.exports = app;