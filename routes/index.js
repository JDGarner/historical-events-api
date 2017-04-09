var express = require('express');
var router = express.Router();
var queries = require('../queries');

router.get('/random-quote', queries.getQuote);
router.get('/quotes', queries.getAllQuotes);

router.get('*', function(req, res, next){
  res.status(404).send('Route Not Found. Valid Routes - /quotes, /random-quote');
});

module.exports = router;
