var mongoose = require('mongoose');
var Quotes = require('../models/quotes');

var prodDb = process.env.MONGOLAB_URI;
var devDb = 'mongodb://localhost:27017/quotesDB';
var dbHost = process.env.NODE_ENV === 'production' ? prodDb : devDb;

mongoose.connect(dbHost);

function getQuote(req, res, next) {
  Quotes.aggregate(
    { $sample: { size: 1 } }
  ).exec(
    function (err, quote) {
      if (err)
        res.send(err);
      res.json(quote[0]);
    }
  );
}

function getAllQuotes(req, res, next) {
  Quotes.find(function(err, quotes) {
    if (err)
      res.send(err);

    res.json(quotes);
  });
}

module.exports = {
  getAllQuotes: getAllQuotes,
  getQuote: getQuote
};
