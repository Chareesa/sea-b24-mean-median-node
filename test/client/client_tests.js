'use strict';

require('../../app/js/client.js');
require('angular-mocks');

describe('MMMController', function() {
  var $controllerConstructor;
  var $httpBackend;
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
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $controllerConstructor('mmmCtrl', {$scope: $scope});
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should make a call to mmm', function() {
      $httpBackend.expectPOST('/api/mmmCalc').respond(200, {mean: 7.5, median: 7.5, mode: 5});
      console.log('THIS IS SCOPE 1: ' + $scope.mmmCalc);
      $scope.mmm = {};
      $scope.mmm.nums = '5 6 7 8 9 10';
      $scope.collectNums();
      $httpBackend.flush();

      expect($scope.mmm.mean).toBeDefined();
      expect($scope.mmm.median).toBeDefined();
      expect($scope.mmm.mode).toBeDefined();
    });
  });
});
