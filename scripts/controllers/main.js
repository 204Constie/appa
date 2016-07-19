'use strict';

angular.module('anApp')
  .controller('MainCtrl', function ($scope, repositories) {
    $scope.sortType = 'forks_count';
    $scope.sortReverse = 'false';

    $scope.repos = repositories;

  });
