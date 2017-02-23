var siteApp = angular.module('siteApp', ['ngRoute']);
// navigator directive
	siteApp.directive("nav", function() {

		var baseUrl = './app/site/views';

		return {
			restrict : "A",
			templateUrl : baseUrl + '/includes/nav.html'
		}
	});
// footer directive
	siteApp.directive("footer", function() {

		var baseUrl = './app/site/views';

		return {
			restrict : "A",
			templateUrl : baseUrl + '/includes/footer.html'
		}
	});
// route
	siteApp.config(function($routeProvider, $locationProvider) {

		var baseUrl = './app/site/views';

		$routeProvider
			.when('/', {
				controller: 'HomeController',
				controllerAs: 'vm',
				templateUrl: baseUrl + '/home.html'
			})
			.when('/login', {
				controller: 'LoginController',
				controllerAs: 'vm',
				templateUrl: baseUrl + '/login.html'
			})
			.when('/404', {
				controller: 'ErrorController',
				controllerAs: 'vm',
				templateUrl: baseUrl + '/errors/404.html'
			});

		$routeProvider.otherwise({
			redirectTo: '/404'
		});

		$locationProvider.html5Mode(true);
	});