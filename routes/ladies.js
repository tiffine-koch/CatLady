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

router.get('/:id', function(req, res) {
  Lady.findById(req.params.id)
  .populate('cats')
  .exec(function(err, lady) {
    if(err || !lady) return res.status(400).send(err || "Lady not found");
    res.send(lady);
  })
})

router.post('/', function(req, res) {
  Lady.create(req.body, function(err, lady) {
    res.status(err ? 400 : 200).send(err || lady);
  });
});

router.put('/:ladyId/addCat/:catId', function(req, res) {
  Lady.findById(req.params.ladyId, function(err, lady) {
    if(err || !lady) return res.status(400).send(err || "Lady not found");
    Cat.findById(req.params.catId, function(err, cat) {
      if(err || !cat) return res.status(400).send(err || "Cat not found");
      lady.cats.push(req.params.catId);

      lady.save(function(err, savedLady) {
        res.status(err ? 400 : 200).send(err || savedLady);
      });
    })
  })
})

router.delete('/:id', function(req, res) {
  Lady.findById(req.params.id, function(err, lady) {
    lady.remove(function(err) {
      if(err) {
        res.status(400).send(err);
        return;
      }
      res.send();
    })
  })
})

module.exports = router;
