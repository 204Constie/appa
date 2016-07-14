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
        resolve: {
            async: function($http) {
              var promise = $http.get('https://api.github.com/search/repositories?q=user:X-Formation+fork:true').then(function(response){
              
              console.log(response.data.items);
              return response.data.items;
            });
          return promise;
         }
        }
      })
      .when('/contributors', {
        templateUrl: 'views/contributors.html',
        controller: 'ContributorsCtrl',
        resolve: {
            async: function($http) {
              var promise = $http.get('https://www.x-formation.com/wp-content/uploads/2014/09/contributors.json').then(function(response){
              
              console.log(response.data);
              return response.data;
            });
          return promise;
         }
        }
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
