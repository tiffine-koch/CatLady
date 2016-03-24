'use strict';

var app = angular.module('catApp');

app.service('LadyService', function($http) {

  this.getAll = function() {
    return $http.get('/ladies');
  };

  this.getUpcoming = function() {
    return $http.get('/ladies/upcoming');
  };

  this.getOne= function(id) {
    return $http.get(`/ladies/${id}`);
  };

  this.create = function(lady) {
    return $http.post('/ladies', lady);
  };

  this.update = function(catId, updateObj) {
    return $http.put(`/ladies/${catId}`, updateObj);
  };

  this.toggleAdoption = function(ladyId) {
    return $http.put(`/ladies/${cat._id}/checkin`);
  };

  this.addCat = function(ladyId, catId) {
    return $http.put(`/ladies/${ladyId}/addCat/${catId}`);
  }
  this.addCats = function(ladyId, catId) {
    return $http.put(`/ladies/${lady._id}/addCats`, {catIds: catIds});
  }
});
