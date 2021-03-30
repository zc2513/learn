(function(angular){
	"use strict";
	var app=angular.module('outer',[]);
		app.controller('out',function($scope){
			$scope.ze='模块A';
		})
})(angular);