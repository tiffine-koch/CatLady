'use strict';

var express = require('express');
var router = express.Router();
var moment = require('moment');

var Cat = require('../models/cat');
var Lady = require('../models/lady');

router.get('/', function(req, res, next) {
  Cat.find({}, function(err, cats) {
    if(err) return res.status(400).send(err);
    res.send(cats);
  });
});

router.post('/', function(req, res) {
  var cat = new Cat(req.body);
  cat.save(function(err, savedCat) {
    res.status(err ? 400 : 200).send(err || savedCat);
  });
});

router.put('/:id/adopted', function(req, res) {
  Cat.findById(req.params.id, function(err, cat) {
    if(err) return res.status(400).send(err);
    cat.adopted = !cat.adopted;
    cat.save(function(err, savedCat) {
      res.status(err ? 400 : 200).send(err || savedCat);
    });
  });
});


router.delete('/:id', function(req, res) {
  Cat.findById(req.params.id, function(err, cat) {
    cat.remove(function(err) {
      if(err) {
        res.status(400).send(err);
        return;
      }
      console.log('successly deleted');
      res.send();
    })
  })
})

module.exports = router;
