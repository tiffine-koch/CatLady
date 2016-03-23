'use strict';

var app = angular.module('catApp');

app.controller('homeCtrl', function($scope, CatService) {
  console.log('home');

  CatService.getAll()
    .then(function(res) {
      $scope.cats = res.data;
      // $scope.appointments = res.data.map(function(appt) {
      //   appt.time = new Date(appt.time);
      //   return appt;
      // });code
      console.log('res:', res);
    }, function(err) {
      console.err('err:', err);
    })
});
