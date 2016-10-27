var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Portfolio' });
});

router.get('/experience', function(req, res, next) {
  res.render('experience', { title: 'My Resume' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Admin Login' });
});

module.exports = router;
