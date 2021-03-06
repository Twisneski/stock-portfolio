'use strict';

const express = require('express');
const router = express.Router();

const quoteControllers = require('../controllers/quote.controllers');

router.get('/quote', quoteControllers.index);
//sets url to /contact and index is the contact page
router.post('/quote', quoteControllers.new);

module.exports = router;
