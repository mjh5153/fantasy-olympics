(function(angular){
	
	'use strict';

	angular.module("FantasyOlympicsHome", []).controller("FantasyOlympicsHomeController", ["$scope", "fantasyOlympicsHomeService" function($scope, fantasyOlympicsHomeService){
		$scope.home = fantasyOlympicsHomeService.getHome();
	}]);
}(window.angular));
