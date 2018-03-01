var mongoose = require('mongoose');

var EventsSchema = mongoose.Schema({
  description: String,
  year: String
});

module.exports = mongoose.model("Events", EventsSchema);
