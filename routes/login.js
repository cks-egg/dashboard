var express = require('express');
var router = express.Router();
const debug = require('debug')('dashboard:router:login');

/* GET home page. */
router.get('/', function(req, res, next) {
  debug("login");
  res.render('login.html', { title: process.env.APP_TITLE });
});

module.exports = router;
