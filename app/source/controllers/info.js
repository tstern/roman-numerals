/**
 * Created by Thomas on 30.05.14.
 */
(function () {
	'use strict';

	angular.module('RomanNumerals')

		.controller('InfoCtrl', ['$scope', 'RomanNumeralsConverter',
			function ($scope, RomanNumeralsConverter) {
				$scope.mapping = RomanNumeralsConverter.getMapping();

                $scope.convertRomanNumeralAlgorithm = RomanNumeralsConverter.convertRomanNumeral.toString().replace(/ {16}/g, '');

                $scope.convertNumberAlgorithm = RomanNumeralsConverter.convertNumber.toString().replace(/ {16}/g, '');
			}]);

}());