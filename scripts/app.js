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
            repositories: function($http) {
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
            contributors: function($http) {
              //https://api.github.com/gists/bcea5b70693143a7f696f3542b88edf7
              var promise = $http.get('https://gist.githubusercontent.com/204Constie/bcea5b70693143a7f696f3542b88edf7/raw/304ae65ef3c89696fb3d171aabca494c5f394c8b/xfcontributors', { headers: {'Content-Type': 'application/json'} }).then(function(response){
              //response.data.files.xfcontributors.content
              console.log(response.data);
              return response.data.files.xfcontributors.content;
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
