var express = require('express');
var router = express.Router();
const debug = require('debug')('dashboard:router:join');

/* GET home page. */
router.get('/', function(req, res, next) {
  debug("join");
  res.render('join.html', { title: process.env.APP_TITLE });
});

module.exports = router;
