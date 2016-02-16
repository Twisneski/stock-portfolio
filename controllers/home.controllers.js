'use strict';

const Home = require('../models/home.models');

module.exports.index = (req, res) => {
  res.render('home');
};
//quote here pulls the jade file

module.exports.new = (req, res) => {
  const obj = new Home({
    name: req.body.name,
    symbol: req.body.symbol,
    quantity: req.body.quantity
  });

  obj.save((err, newObj) => {
    if (err) throw err;
    //saving to db

    res.send(`<h1>Thanks for contacting us ${newObj.name}</h1>`);
  });
};
