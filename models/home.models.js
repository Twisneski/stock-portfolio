'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('home',
  mongoose.Schema({
    name: String,
    stockSymbol: String,
    quantity: String
  })
);
