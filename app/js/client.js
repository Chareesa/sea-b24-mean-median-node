'use strict';

require('angular/angular');

var mmmApp = angular.module('mmmApp', []);

//services
require('./services/mmm_service.js')(mmmApp);

//controllers
require('./controllers/mmm_controller.js')(mmmApp);

// mmmApp.config(['$routeProvider', function($routeProvider) {
//   $routeProvider
//   .when('/api/mmmCalc', {
//     templateUrl: '../templates/mmm/mmm_template.html',
//     controller: 'mmmCtrl'
//   })
//   .otherwise({
//     redirectTo: '/api/mmmCalc'
//   });
// }]);
