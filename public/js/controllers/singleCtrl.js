'use strict';

var app = angular.module('catApp');

app.controller('singleCtrl', function($scope, $http, CatService, LadyService) {
  console.log('lady');

  var id = '56f319a00a80284d1f797b4c';
  $http({
    method: "GET",
    url: `/ladies/${id}`
    }).then(function(response){
      $scope.lady = response.data;
      console.log($scope.lady);
    }, function(error){
      console.log('error');
  });

  CatService.getAll()
  .then(function(res) {
    $scope.cats = res.data;
    console.log('res:', res);
  }, function(err) {
    console.err('err:', err);
  })
  // $scope.singleLady = function(lady) {
  // LadyService.getOne()
  // .then(function(res) {
  //   $scope.lady = res.data;
  //   console.log('res:', res);
  // }, function(err) {
  //   console.err('err:', err);
  // })
// }

});
