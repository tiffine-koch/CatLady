'use strict';

var app = angular.module('catApp');

app.controller('formCtrl', function($scope, $http, CatService, LadyService) {

  $scope.submitCatForm = function() {
    $scope.cats = [];
    var cat = {name: $scope.cat.name, image: $scope.cat.image};
    $scope.cats.push(cat);
    $http({
      method: 'POST',
      url: '/cats',
      data: cat
      }).then(function(response){
        swal("Your cat has been uploaded!");
      }, function(err){
        console.error(err);
      })
      $scope.cat = {};
    }

  $scope.submitLadyForm = function() {
    $scope.ladies = [];
    var lady = {name: $scope.lady.name, phone: $scope.lady.phone, image: $scope.lady.image, bio: $scope.lady.bio, number: $scope.lady.number};
    $scope.ladies.push(lady);
    $http({
      method: 'POST',
      url: '/ladies',
      data: lady
      }).then(function(response){
        swal("Your lady has been uploaded!");
      }, function(err){
        console.error(err);
      })
      $scope.lady = {};
  }
});
