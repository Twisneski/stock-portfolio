'use strict';

const express = require('express');
const router = express.Router();

const portfolioControllers = require('../controllers/portfolio.controllers');

router.get('/portfolio', portfolioControllers.index);
router.post('/portfolio', portfolioControllers.new);
//sets url to /contact and index is the contact page
module.exports = router;
