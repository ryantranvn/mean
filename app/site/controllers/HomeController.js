siteApp.controller('HomeController', ['$scope', 'WHAT', function($scope, WHAT){

	$scope.what = WHAT;
	$scope.currentNavItem = 'home';
	$scope.error = false;

}]);