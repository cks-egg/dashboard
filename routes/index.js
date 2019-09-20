var express = require('express');
var router = express.Router();
const debug = require('debug')('dashboard:router:index');

/* GET home page. */
router.get('/', function(req, res, next) {
  debug("index");
  res.redirect("/login");
});

module.exports = router;
