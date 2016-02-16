'use strict';

const express = require('express');
const router = express.Router();


const homeControllers = require('../controllers/home.controllers');

router.get('/home', homeControllers.index);
//sets url to /contact and index is the contact page
router.post('/home', homeControllers.new);

module.exports = router;
