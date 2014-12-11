'use strict';

require('../../app/js/client.js');
require('angular-mocks');

describe('MMMController', function() {
  var $controllerConstructor;
  var $scope;

  beforeEach(angular.mock.module('mmmApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should create a controller', function() {
    var mmmController = $controllerConstructor('mmmCtrl', {$scope: $scope});
    expect(typeof mmmController).toBe('object');
  });

  describe('rest request', function() {
    it('should make a call to mmm', function() {
      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.mmm = {};
      $scope.mmm.nums = '5 6 7 8 9 10';
      $scope.collectNums();

      expect($scope.mmmBackend.mean).toBe(7.5);
      expect($scope.mmmBackend.median).toBe(7.5);
      expect($scope.mmmBackend.mode).toBe(5);
    });
  });
});
