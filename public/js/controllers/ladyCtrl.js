'use strict';

var app = angular.module('catApp');

app.controller('ladyCtrl', function($rootScope, $scope, $http, CatService, LadyService) {
  LadyService.getAll()
  .then(function(res) {
    $scope.ladies = res.data;
    console.log('res:', res);
  }, function(err) {
    console.err('err:', err);
  })

  $scope.singleLady = function(lady) {
    var id = lady._id;
    LadyService.getOne(id)
      .then(function(response){
        $rootScope.lady = response.data;
        var lady = $scope.lady;
      }, function(error){
        console.log('error');
    });

    CatService.getAll()
    .then(function(res) {
      $rootScope.cats = res.data;
      console.log('res:', res);
    }, function(err) {
      console.err('err:', err);
    })
  }

  $scope.addCat = function(lady, cat) {
    var catId = cat._id;
    var ladyId = lady._id;

    LadyService.addCat(ladyId, catId)
    .then(function(res) {
      swal("Congrats on your new cat!");
      console.log('res:', res);
    }, function(err) {
      console.log('err:', err);
    })
  }


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
