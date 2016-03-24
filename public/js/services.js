'use strict';

var app = angular.module('catApp');

app.service('CatService', function($http) {

  this.getAll = function() {
    return $http.get('/cats');
  };

  this.getUpcoming = function() {
    return $http.get('/cats/upcoming');
  };

  this.create = function(cat) {
    return $http.post('/cats', cat);
  };

  this.update = function(catId, updateObj) {
    return $http.put(`/cats/${catId}`, updateObj);
  };

  this.toggleCheckin = function(catId) {
    return $http.put(`/cats/${cat._id}/checkin`);
  };

  this.addClient = function(catId, ladyId) {
    return $http.put(`/cats/${cat._id}/addLady/${lady._id}`);
  }
  //multiple clients
  this.addClients = function(catId, ladyId) {
    return $http.put(`/cats/${cat._id}/addLadies`, {ladyIds: ladyIds});
  }

});
app.service('LadyService', function($http) {

  this.getAll = function() {
    return $http.get('/ladies');
  };

  this.getUpcoming = function() {
    return $http.get('/ladies/upcoming');
  };
  
  this.getOne= function(ladyId) {
    return $http.get(`/ladies/${lady_id}`);
  };

  this.create = function(lady) {
    return $http.post('/ladies', lady);
  };

  this.update = function(catId, updateObj) {
    return $http.put(`/ladies/${catId}`, updateObj);
  };

  this.toggleCheckin = function(ladyId) {
    return $http.put(`/ladies/${cat._id}/checkin`);
  };

  this.addClient = function(ladyId, catId) {
    return $http.put(`/ladies/${lady._id}/addCat/${cat._id}`);
  }
  //multiple clients
  this.addClients = function(ladyId, catId) {
    return $http.put(`/ladies/${lady._id}/addCats`, {catIds: catIds});
  }

});
