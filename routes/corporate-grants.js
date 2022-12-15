var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/corporate-grants', function(req, res, next) {
  res.render('corporate-grants', { title: "Bloomingdale's" });
});

module.exports = router;
