var express = require('express');
var router = express.Router();


var content = {};
content.title = 'Hallo Welt';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', content);
});

module.exports = router;
