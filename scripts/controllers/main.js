'use strict';

angular.module('anApp')
  .service('githubService', function($http){
 	var githubService = {
 		async: function() {
	 		var promise = $http.get('https://api.github.com/search/repositories?q=user:X-Formation+fork:true').then(function(response){
			    	
			    	console.log(response.data.items);
			    	return response.data.items;
			    });
			 	return promise;
			 }
			};
	return githubService;
  
  })
  .controller('MainCtrl', function ($scope, githubService) {
    $scope.sortType = 'forks_count';
    $scope.sortReverse = 'false';

    githubService.async().then(function(response){
    	$scope.repos = response;
    });

    // if service was not made separately:
    // $http.get('https://api.github.com/search/repositories?q=user:X-Formation+fork:true').then(function(response){
    // 	$scope.repos = response.data.items;
    // 	console.log($scope.repos);
    // });
  });
