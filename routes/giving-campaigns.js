var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/giving-campaigns', function(req, res, next) {
  res.render('giving-campaigns', { title: "Bloomingdale's" });
});

module.exports = router;
