'use strict';

const express = require('express');
const router = express.Router();


const quoteController = require('../controllers/quote.controllers');

router.get('/quote', quoteController.index);
//sets url to /contact and index is the contact page
router.post('/quote', quoteController.new);

module.exports = router;
