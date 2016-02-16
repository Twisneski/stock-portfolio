'use strict';

const express = require('express');
const router = express.Router();
//Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.

const quote = require('./quote.routes');


router.use(quote);


module.exports = router;

