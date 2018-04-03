var app = angular.module('app-router', ['ngRoute'])

app.config( function($routeProider){
	$routeProider
	.when('/', {
		templateUrl: 'pageTwo.html'
	})
	.when('/pageTwo', {
		templateUrl: 'pageTwo.html'
	})
})