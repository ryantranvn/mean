'use strict';

var siteApp = angular.module('siteApp', ['ngRoute']);

// navigator directive
siteApp.directive("nav", function() {

	var baseUrl = './app/site/views';

	return {
		restrict : "A",
		templateUrl : baseUrl + '/includes/nav.html'
	}
});

siteApp.config(function($routeProvider, $locationProvider) {

	var baseUrl = './app/site/views';

	$routeProvider
		.when('/', {
			controller: 'HomeController',
			controllerAs: 'vm',
			templateUrl: baseUrl + '/home.html'
		})
		.when('/login', {
			controller: 'HomeController',
			controllerAs: 'vm',
			templateUrl: baseUrl + '/login.html'
		})
		.otherwise('/404', {
			templateUrl: baseUrl + '/errors/404.html'
		});

	$locationProvider.html5Mode(true);
});