'use strict';

var mongoose = require('mongoose');

var ladySchema = mongoose.Schema({
  name: String,
  image: String,
  bio: String,
  number: Number,
  cats: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cat'}],
  createdAt: { type: Date, default: Date.now }
});

var Lady = mongoose.model('Lady', ladySchema);

module.exports = Lady;
