'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.hidemmm = true;
    $scope.collectNums = function() {
      var givenNums = $scope.mmm.nums.split(' ');
      console.log(givenNums);

      $http({
        method: 'POST',
        url: '/api/mmmCalc',
        data: givenNums
      })
      .success(function(data) {
        $scope.mmm.mean = data.mean;
        $scope.mmm.median = data.median;
        $scope.mmm.mode = data.mode;
        $scope.hidemmm = false;

      })
      .error(function(data) {
        console.log(data);
      });
    };
  }]);
};
