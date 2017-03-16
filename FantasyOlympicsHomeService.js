(function(angular){
	'use strict';

angular.module("fantasyOlympicsHome.service", []).factory('fantasyOlympicsHomeService', function(){
	
	var home = {},
	    teams = [{team : "Swimming", name : "swim"}, team : "Basketball", name : "basketball", team : "high jump", name : "jump"}];
	
	function addTeams(teams) {
		var i, fantasyTeams = [];
		for (i = 0; i < teams.length; i++) {
			teams.push(teams[i]);
		};
		return teams;
	}

	function getHome(){
	     return addTeams(teams);
	};

	return {
		getHome : getHome
	}
});
}(window.angular));