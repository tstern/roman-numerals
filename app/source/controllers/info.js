/**
 * Created by Thomas on 30.05.14.
 */
(function () {
	'use strict';

	angular.module('RomanNumerals')

		.controller('InfoCtrl', ['$scope',
			function ($scope) {
				$scope.text = 'This is the info controller.';
			}]);

}());