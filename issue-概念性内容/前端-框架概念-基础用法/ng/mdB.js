(function(angular){
	"use strict";
	var demo=angular.module('outerB',[]);
		demo.controller('outB',function($scope){
			$scope.ze='模块B';
		})
})(angular);