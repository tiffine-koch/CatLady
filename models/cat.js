'use strict';

var mongoose = require('mongoose');

var catSchema = mongoose.Schema({
  adoptionDate: Date,
  name: String,
  image: String,
  lady: [{type: mongoose.Schema.Types.ObjectId, ref: 'Lady'}],
  createdAt: { type: Date, default: Date.now },
  adopted: { type: Boolean, default: false }
});

var Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
