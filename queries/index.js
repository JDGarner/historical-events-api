var mongoose = require('mongoose');
var Events = require('../models/events');

var prodDb = process.env.MONGOLAB_URI;
var devDb = 'mongodb://localhost:27017/historical-events';
// var dbHost = process.env.NODE_ENV === 'production' ? prodDb : devDb;
var dbHost = prodDb;

mongoose.connect(dbHost);

function getAllEvents(req, res, next) {
  Events.find(function(err, events) {
    if (err)
      res.send(err);
    res.json(events);
  });
}

module.exports = {
  getAllEvents: getAllEvents
};
