'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', '$http', 'ResourceBackend', function($scope, $http, ResourceBackend) {
    var mmmBackend = new ResourceBackend();

    $scope.hidemmm = true;
    $scope.collectNums = function() {
      $scope.givenNums = $scope.mmm.nums.split(' ');

      var mean = mmmBackend.mean($scope.givenNums);
      var median = mmmBackend.median($scope.givenNums);
      var mode = mmmBackend.mode($scope.givenNums);
      var data = {mean: mean, median: median, mode: mode};
      $scope.mmmBackend = data;
      $scope.hidemmm = false;
    };
  }]);
};
