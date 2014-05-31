/**
 * Created by Thomas on 30.05.14.
 */
(function () {
	'use strict';

	var dependencies = [
		'ui.router'
	];

	angular.module('RomanNumerals', dependencies)

		.config(['$stateProvider', '$urlRouterProvider',
			function ($stateProvider, $urlRouterProvider) {
				var main = {
						url: '/main',
						name: 'main',
						templateUrl: 'views/main.tpl.html',
						controller: 'MainCtrl'
					},
					info = {
						url: '/info',
						name: 'info',
						templateUrl: 'views/info.tpl.html',
						controller: 'InfoCtrl'
					};

				// redirecting
				$urlRouterProvider.otherwise(main.url);

				// register state objects
				$stateProvider.state(main);
				$stateProvider.state(info);
			}])

		.run(['$rootScope', '$state', '$stateParams',
			function ($rootScope, $state, $stateParams) {
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
			}]);
}());