'use strict';

angular.module('anApp')
  .controller('MainCtrl', function ($scope, async) {
    $scope.sortType = 'forks_count';
    $scope.sortReverse = 'false';

    $scope.repos = async;

  });
