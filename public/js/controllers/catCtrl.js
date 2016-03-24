'use strict';

var app = angular.module('catApp');

app.controller('catCtrl', function($scope, $http, CatService, LadyService) {
  CatService.getAll()
  .then(function(res) {
    $scope.cats = res.data;
    console.log('res:', res);
  }, function(err) {
    console.err('err:', err);
  })

  $scope.deleteCat = function(index, cat) {
  var id = cat._id
  var deleted = $scope.cats.splice(index, 1);
  $http({
    method: 'DELETE',
    url: `/cats/${id}`
  })
  .then(function(data) {
    console.log('success');
  }, function(err) {
    console.error(err);
  })
}
});
