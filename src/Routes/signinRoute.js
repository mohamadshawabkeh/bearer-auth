'use strict';

const basic = require('../middleware/basicAuth')
const express = require('express');
const signinRouter = express.Router();


signinRouter.post('/signin', basic, loginHandler);

function loginHandler(req,res){
    res.status(200).json(req.user);

}

module.exports=signinRouter;
