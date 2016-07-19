'use strict';

angular.module('anApp')
  .controller('ContributorsCtrl', function ($scope, contributors) {
    $scope.sortType = 'contributions';
    $scope.sortReverse = 'false';

    $scope.contributors = contributors;

  });
