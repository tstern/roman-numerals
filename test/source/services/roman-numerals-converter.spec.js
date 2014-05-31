/**
 * Created by Thomas on 30.05.14.
 */
(function () {
	'use strict';

	var testValues = [
		{ number: 0, romanNumeral: '' },
		{ number: 1, romanNumeral: 'I' },
		{ number: 2, romanNumeral: 'II' },
		{ number: 3, romanNumeral: 'III' },
		{ number: 4, romanNumeral: 'IV' },
		{ number: 5, romanNumeral: 'V' },
		{ number: 6, romanNumeral: 'VI' },
		{ number: 7, romanNumeral: 'VII' },
		{ number: 8, romanNumeral: 'VIII' },
		{ number: 9, romanNumeral: 'IX' },
		{ number: 10, romanNumeral: 'X' },
		{ number: 11, romanNumeral: 'XI' },
		{ number: 12, romanNumeral: 'XII' },
		{ number: 13, romanNumeral: 'XIII' },
		{ number: 14, romanNumeral: 'XIV' },
		{ number: 15, romanNumeral: 'XV' },
		{ number: 16, romanNumeral: 'XVI' },
		{ number: 17, romanNumeral: 'XVII' },
		{ number: 18, romanNumeral: 'XVIII' },
		{ number: 19, romanNumeral: 'XIX' },
		{ number: 20, romanNumeral: 'XX' },
		{ number: 22, romanNumeral: 'XXII' },
		{ number: 25, romanNumeral: 'XXV' },
		{ number: 27, romanNumeral: 'XXVII' },
		{ number: 40, romanNumeral: 'XL' },
		{ number: 49, romanNumeral: 'XLIX' },
		{ number: 74, romanNumeral: 'LXXIV' },
		{ number: 75, romanNumeral: 'LXXV' },
		{ number: 88, romanNumeral: 'LXXXVIII' },
		{ number: 142, romanNumeral: 'CXLII' },
		{ number: 149, romanNumeral: 'CXLIX' },
		{ number: 150, romanNumeral: 'CL' },
		{ number: 151, romanNumeral: 'CLI' },
		{ number: 212, romanNumeral: 'CCXII' },
		{ number: 348, romanNumeral: 'CCCXLVIII' },
		{ number: 492, romanNumeral: 'CDXCII' },
		{ number: 499, romanNumeral: 'CDXCIX' },
		{ number: 501, romanNumeral: 'DI' },
		{ number: 509, romanNumeral: 'DIX' },
		{ number: 550, romanNumeral: 'DL' },
		{ number: 551, romanNumeral: 'DLI' },
		{ number: 558, romanNumeral: 'DLVIII' },
		{ number: 777, romanNumeral: 'DCCLXXVII' },
		{ number: 888, romanNumeral: 'DCCCLXXXVIII' },
		{ number: 999, romanNumeral: 'CMXCIX' },
        { number: 1001, romanNumeral: 'MI' },
        { number: 1009, romanNumeral: 'MIX' },
        { number: 2444, romanNumeral: 'MMCDXLIV' },
		{ number: 4088, romanNumeral: 'MMMMLXXXVIII' },
		{ number: 8257, romanNumeral: 'MMMMMMMMCCLVII' }
	];

	describe('Service: RomanNumeralsConverter', function () {
		var converter;

		beforeEach(module('RomanNumerals'));

		beforeEach(inject(function ($injector) {
			converter = $injector.get('RomanNumeralsConverter');
		}));

		it('should have RomanNumeralsConverter Service', function () {
			expect(converter).not.toBeUndefined();
		});

		describe('convertRomanNumeral()', function () {
			testValues.forEach(function (testValue) {
				var number = testValue.number,
					romanNumeral = testValue.romanNumeral;

				it('should convert the roman numeral ' + romanNumeral + ' to the number ' + number, function () {
					expect(converter.convertRomanNumeral(romanNumeral)).toBe(number);
				});
			});
		});

		describe('convertNumber()', function () {
			testValues.forEach(function (testValue) {
				var number = testValue.number,
					romanNumeral = testValue.romanNumeral;

				it('should convert the number ' + number + ' to the roman numeral ' + romanNumeral, function () {
					expect(converter.convertNumber(number)).toBe(romanNumeral);
				});
			});
		});
	});

}());