'use strict';

var app = angular.module('catApp');

app.controller('ladyCtrl', function($scope, $http, CatService, LadyService) {
  console.log('lady');

  LadyService.getAll()
  .then(function(res) {
    $scope.ladies = res.data;
    console.log('res:', res);
  }, function(err) {
    console.err('err:', err);
  })

  $scope.deleteLady = function(index, lady) {
  var id = lady._id
  var deleted = $scope.ladies.splice(index, 1);
  $http({
    method: 'DELETE',
    url: `/ladies/${id}`
  })
  .then(function(data) {
    console.log('success');
  }, function(err) {
    console.error(err);
  })
}
});
