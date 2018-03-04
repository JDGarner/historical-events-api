var mongoose = require('mongoose');

var EventsSchema = mongoose.Schema({
  description: String,
  year: Number
});

module.exports = mongoose.model("Events", EventsSchema);
