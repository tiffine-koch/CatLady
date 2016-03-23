'use strict';

var app = angular.module('catApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: '/partials/home.html', controller: 'homeCtrl' })
    .state('form', { url: '/form', templateUrl: '/partials/form.html', controller: 'formCtrl' })
    .state('ladies', { url: '/ladies', templateUrl: '/partials/ladies.html', controller: 'ladyCtrl' })
    .state('cats', { url: '/cats', templateUrl: '/partials/cats.html', controller: 'catCtrl' })

  $urlRouterProvider.otherwise('/');
});
