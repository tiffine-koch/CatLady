'use strict';

var app = angular.module('catApp');

app.controller('formCtrl', function($scope, $http, CatService, LadyService) {
  console.log('form');

  $scope.submitCatForm = function() {
    $scope.cats = [];
    console.log('inside cat function');
    // var cat = $scope.cat;
    var cat = {name: $scope.cat.name, image: $scope.cat.image};
    console.log('cat:', cat);
    $scope.cats.push(cat);
    console.log('cats:', $scope.cats);
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
    console.log('inside lady function');
    var lady = {name: $scope.lady.name, phone: $scope.lady.phone, image: $scope.lady.image, bio: $scope.lady.bio, number: $scope.lady.number};
    console.log('lady:', lady);
    console.log('cats:', $scope.lady.number);
    $scope.ladies.push(lady);
    console.log('ladies:', $scope.ladies);
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
// $scope.submitCatForm = function() {
//   $scope.cats = [];
//   console.log('inside cat function');
//   // var cat = $scope.cat;
//   var cat = {name: $scope.cat.name, image: $scope.cat.image};
//   console.log('cat:', cat);
//   $scope.cats.push(cat);
//   console.log('cats:', $scope.cats);
//   CatService.create()
//     .then(function(res) {
//       console.log('res:', res);
//     }, function(err) {
//       console.err('err:', err);
//     })
//   }
