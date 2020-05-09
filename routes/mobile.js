var express = require('express');
var router = express.Router();


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

router.get('/show', function(req, res, next) {
    results = 'OKKKKKKKKK';
    res.send(JSON.stringify(results));
});


module.exports = router;