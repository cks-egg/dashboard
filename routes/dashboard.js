var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard.html', { title: process.env.APP_TITLE });
});

module.exports = router;
