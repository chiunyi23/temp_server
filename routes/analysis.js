var express = require('express');
var router = express.Router();
const vendingModel = require('../model')


// router.get('/show', (req, res, next) => {
// 	userModel.show(null, function(err, results){
// 		if (err) throw err;
//         	res.send(JSON.stringify(results))
// 	})
// });


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

router.get('/day_revenue/all', function(req, res, next) {
    results = 1029;
    res.send(JSON.stringify(results));
});

router.get('/week_revenue/all', function(req, res, next) {
    results = 7190;
    res.send(JSON.stringify(results));
})

router.get('/month_revenue/all', function(req, res, next) {
    results = 41092;
    res.send(JSON.stringify(results));
})

router.get('/year_revenue/all', function(req, res, next) {
    results = 41091 * 12;
    res.send(JSON.stringify(results));
})


router.get('/week_list/:machine_id', function(req, res, next) {
    results = [];
    for(let i = 0; i < 7; i++) {
        results.push(getRandomInt(850, 1500));
    }
    console.log(results)
    res.send(JSON.stringify(results));
})

router.get('/month_list/:machine_id', function(req, res, next) {
    results = [];
    for(let i = 0; i < 12; i++) {
        results.push(getRandomInt(29000, 51000));
    }
    console.log(results)
    res.send(JSON.stringify(results));
})


router.get('/month_revenue/top', function(req, res, next) {
    result = [41019, 'm04', "理工二館一樓"]
    res.send(JSON.stringify(results))
})

router.get('/month_revenue/ranking_list', function(req, res, next) {
    results = []
    for(let i = 0; i < 15; i++) {
        results.push(getRandomInt(30000, 50000));
    }
    res.send(JSON.stringify(results))
})

router.get('/week_revenue/ranking_list', function(req, res, next) {
    results = []
    for(let i = 0; i < 15; i++) {
        results.push(getRandomInt(6800, 9000));
    }
    res.send(JSON.stringify(results))
})


module.exports = router;