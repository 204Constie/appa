'use strict';

angular.module('anApp')
  .controller('ContributorsCtrl', function ($scope, async) {
    $scope.sortType = 'contributions';
    $scope.sortReverse = 'false';

    $scope.contributors = async;

  });
