var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main', { title: "Bloomingdale's" });
});

router.get('/giving-campaigns', function(req, res, next) {
  res.render('giving-campaigns', { title: "Bloomingdale's" });
});

router.get('/corporate-grants', function(req, res, next) {
  res.render('corporate-grants', { title: "Bloomingdale's" });
});

router.get('/colleague-appreciation', function(req, res, next) {
  res.render('colleague-appreciation', { title: "Bloomingdale's" });
});

module.exports = router;
