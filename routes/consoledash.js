var express = require('express');
var router = express.Router();

/* GET ConsoleDash. */
router.get('/', function(req, res, next) {
  res.render('consoledash', { title: 'Consoledash' });
});

module.exports = router;
