/**
 * Created by Thomas on 30.05.14.
 */
(function () {
    'use strict';

    angular.module('RomanNumerals')

        .service('RomanNumeralsConverter', [
            function () {
                var mapping = {
                    'I': 1,
                    'V': 5,
                    'X': 10,
                    'L': 50,
                    'C': 100,
                    'D': 500,
                    'M': 1000
                };

                this.getMapping = getMapping;

                this.convertRomanNumeral = convertRomanNumeral;

                this.convertNumber = convertNumber;

                function getMapping() {
                    return mapping;
                }

                function convertRomanNumeral(romanNumeral) {
                    var result = 0,
                        char, next, charVal, nextVal, index;

                    for (index = 0; index < romanNumeral.length; index++) {
                        char = romanNumeral.charAt(index);
                        charVal = mapping[char];
                        next = romanNumeral.charAt(index + 1);
                        nextVal = mapping[next];

                        if (next === '' || charVal >= nextVal) {
                            result += charVal;

                        } else {
                            result += nextVal - charVal;
                            index++;
                        }
                    }

                    return result;
                }

                function convertNumber(number) {
                    var numerals = ['M', 'D', 'C', 'L', 'X', 'V', 'I'],
                        romanNumeral = '',
                        numeral, value, counter, index;

                    for (index = 0; index < numerals.length; index++) {
                        numeral = numerals[index];
                        value = mapping[numeral];

                        for (counter = 0; counter < parseInt(number / value); counter++) {
                            romanNumeral += numeral;
                        }

                        number = number % value;
                    }

                    romanNumeral = romanNumeral.replace('DCCCC', 'CM');
                    romanNumeral = romanNumeral.replace('CCCC', 'CD');
                    romanNumeral = romanNumeral.replace('LXXXX', 'XC');
                    romanNumeral = romanNumeral.replace('XXXX', 'XL');
                    romanNumeral = romanNumeral.replace('VIIII', 'IX');
                    romanNumeral = romanNumeral.replace('IIII', 'IV');

                    return romanNumeral;
                }
            }]);
}());