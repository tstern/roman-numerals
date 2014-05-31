/**
 * Created by Thomas on 30.05.14.
 */
(function () {
    'use strict';

    angular.module('RomanNumerals')

        .controller('MainCtrl', ['$scope', 'RomanNumeralsConverter',
            function ($scope, RomanNumeralsConverter) {
                var now = new Date();

                $scope.number = now.getFullYear();

                $scope.romanNumeral = '';

                $scope.$watch('number', function (newValue, oldValue) {
                    $scope.romanNumeral = RomanNumeralsConverter.convertNumber(newValue);
                });

                $scope.$watch('romanNumeral', function (newValue, oldValue) {
                    $scope.number = RomanNumeralsConverter.convertRomanNumeral(newValue);
                });
            }]);

}());