'use strict';

/**
 * @ngdoc function
 * @name stocklevelsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the stocklevelsApp
 */
angular.module('stocklevelsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
