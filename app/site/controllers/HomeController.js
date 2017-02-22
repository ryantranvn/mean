'use strict';

siteApp.controller('navController', ['$scope', function($scope) {
	$scope.activeNav = 'home';
}]);

siteApp.controller('HomeController', function($http){
	var vm = this;

	vm.message = "Helu";

	return true;
});