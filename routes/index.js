var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ellen\'s Portfolio' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Ellen\'s Portfolio' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Ellen' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Ellen' });
});

module.exports = router;
