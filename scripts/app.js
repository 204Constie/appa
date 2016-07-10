'use strict';

angular
  .module('anApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        // controllerAs: 'mainCtrl'
      })
      .when('/contributors', {
        templateUrl: 'views/contributors.html',
        controller: 'ContributorsCtrl',
        // controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('defaultCtrl', function($scope, $location){
     $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
  });
