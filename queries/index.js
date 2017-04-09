var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quotesDB');
var Quotes = require('../models/quotes');

function getQuote(req, res, next) {
  Quotes.aggregate(
    { $sample: { size: 1 } }
  ).exec(
    function (err, quote) {
      if (err)
        res.send(err);
      res.json(quote);
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
