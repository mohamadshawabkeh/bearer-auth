'use strict';

const express = require('express');
const bearer = require('../middleware/bearerAuth');
const secretStuffRouter = express.Router();

secretStuffRouter.get('/secretstuff', bearer, secretStuff);

function secretStuff(req, res) {
    res.json({
        'message': 'you can view the secret',
        'user': req.user
    });
}

module.exports = secretStuffRouter;
