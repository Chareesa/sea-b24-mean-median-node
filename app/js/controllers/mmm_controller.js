'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', 'ResourceBackend', function($scope, ResourceBackend) {
    var mmmBackend = new ResourceBackend();

    $scope.hidemmm = true;
    $scope.collectNums = function() {
      $scope.givenNums = $scope.mmm.nums.split(' ');

      mmmBackend.collectNums($scope.givenNums)
      .success(function(data) {
        $scope.mmm.mean = data.mean;
        $scope.mmm.median = data.median;
        $scope.mmm.mode = data.mode;
        $scope.hidemmm = false;
      });
    };
  }]);
};
