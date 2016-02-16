'use strict';

const Quote = require('../models/quote.models');
const request = require('request');

module.exports.index = (req, res) => {
  res.render('quote');
};
//quote here pulls the jade file

module.exports.new = (req, res) => {
  const symbol = req.body.symbol;
  //this comes from the input form
  const URL = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=${symbol}`;

  //http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=AAPL

  request.get(URL, (err, response, body) => {
    if (err) throw err;
    console.log('body', body);
    body = JSON.parse(body);
    const obj = new Quote({
      name: body.Name,
      symbol: body.Symbol,

    });
    //this comes from the URL

    obj.save((err, newObj) =>{
      if (err) throw err;
      //saving to db

      res.send(`<h1> Here is your quote, ${newObj.name}</h1>`);
    });
  });

};
