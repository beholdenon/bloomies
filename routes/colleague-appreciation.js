var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/colleague-appreciation', function(req, res, next) {
  res.render('colleague-appreciation', { title: "Bloomingdale's" });
});

module.exports = router;
