// Create application
	var siteApp = angular.module('siteApp', ['ngMaterial', 'ngRoute']);
// Constants
	siteApp.constant('WHAT', {
		'baseUrl': './'
	});

	var viewsUrl = './app/site/views';
// navigator directive
	siteApp.directive("nav", function() {

		return {
			restrict : "A",
			templateUrl : viewsUrl + '/includes/nav.html'
		}
	});
// footer directive
	siteApp.directive("footer", function() {

		return {
			restrict : "A",
			templateUrl : viewsUrl + '/includes/footer.html'
		}
	});
// route
	siteApp.config(function($routeProvider, $locationProvider) {

		$routeProvider
			.when('/', {
				controller: 'HomeController',
				controllerAs: 'vm',
				templateUrl: viewsUrl + '/home.html'
			})
			.when('/home', {
				controller: 'HomeController',
				controllerAs: 'vm',
				templateUrl: viewsUrl + '/home.html'
			})
			.when('/signin', {
				controller: 'SigninController',
				controllerAs: 'vm',
				templateUrl: viewsUrl + '/signin.html'
			})
			.when('/404', {
				controller: 'ErrorController',
				controllerAs: 'vm',
				templateUrl: viewsUrl + '/errors/404.html'
			});

		$routeProvider.otherwise({
			redirectTo: '/404'
		});

		$locationProvider.html5Mode(true);
	});