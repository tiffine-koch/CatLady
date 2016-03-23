'use strict';

var express = require('express');
var router = express.Router();
var moment = require('moment');

var Lady = require('../models/lady');
var Cat = require('../models/cat');

router.get('/', function(req, res, next) {
  Lady.find({}, function(err, ladies) {
    if(err) return res.status(400).send(err);
    res.send(ladies);
  });
});

router.post('/', function(req, res) {
  Lady.create(req.body, function(err, lady) {
    res.status(err ? 400 : 200).send(err || lady);
    console.log('req.body', lady);
  });
});

router.delete('/:id', function(req, res) {
  Lady.findById(req.params.id, function(err, lady) {
    lady.remove(function(err) {
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
