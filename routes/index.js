var express = require('express');
var router = express.Router();
var queries = require('../queries');

router.get('/events', queries.getAllEvents);

router.get('*', function(req, res, next){
  res.status(404).send('Route Not Found. Valid Routes - /events');
});

module.exports = router;
