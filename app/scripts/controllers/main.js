'use strict';

/**
 * @ngdoc function
 * @name stocklevelsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stocklevelsApp
 */
angular.module('stocklevelsApp')
  .controller('MainCtrl', function ($scope, $http) {
  $scope.rows = [];
  $scope.headers = [];
  $scope.init = function() {
     $http.jsonp('https://spreadsheets.google.com/feeds/list/1nNjNvxpZ6UKF7e2l_CMmi6Sz_Mur16mlz0VvlgTsqM4/4/public/values?alt=json' + '&callback=JSON_CALLBACK').success(function(data) {
        
	      angular.forEach(data, function(value, index){
	        angular.forEach(value.entry, function(cells, index){
	        		var row = {};
	        		if($scope.headers.length == 0)
	        		{ 
	        			angular.forEach(cells, function(key, index)
	        			{
	        				if(cells[index] !== 'undefined' && cells[index]["$t"] && cells[index]["type"] !== "text")
	        					$scope.headers.push(index);
	        			});
	        		}
	        		
	            angular.forEach($scope.headers, function(key, index){
	              	//console.log(cells[index]);
	              	row[index] = cells[$scope.headers[index]]["$t"];
	            });
	            $scope.rows.push(row);
	        });
	        
        });
          
      }).error(function(error) {
    });	
      console.log($scope.rows);
	            
  }
});
