'use strict';

const Quote = require('../models/quote.models');

module.exports.index = (req, res) => {
  res.render('quote');
};

module.exports.new = (req, res) => {
  const obj = new Quote({
    name: req.body.symbol,
    symbol: req.body.symbol,
    quantity: req.body.quantity
  });

  obj.save((err, newObj) => {
    if (err) throw err;

    res.send(`<h1>Thanks for contacting us ${newObj.name}</h1>`);
  });
};
