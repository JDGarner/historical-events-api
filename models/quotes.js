var mongoose = require('mongoose');

var QuotesSchema = mongoose.Schema({
  content: String,
  author: String
});

module.exports = mongoose.model("Quotes", QuotesSchema);
