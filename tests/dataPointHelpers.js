var should = require('should');
var dataPointFromArray = require('../lib/dataPointHelpers').dataPointFromArray;
var dataPointArrayFromNumberArray = require('../lib/dataPointHelpers').dataPointArrayFromNumberArray;
var dataPointArrayFromArrayOfNumberArrays = require('../lib/dataPointHelpers').dataPointArrayFromArrayOfNumberArrays;

describe('dataPointHelpers', function () {
    describe('dataPointFromArray(value)', function () {
        it('should throw an error upon an invalid value being passed', function () {
            var invalidOptions = [null, '', {}, function () {}];
            for (var index = 0; index < invalidOptions.length; index++) {
                var value = invalidOptions[index];
                (function () {
                    dataPointFromArray(value);
                }).should.throw();
            }
        });

        it('should convert the array of data points and not throw an error', function () {
            (function () {
                var expectedDataPointArray = [1.1, 2.2, 3.3, 4.4];
                var dataPoint = dataPointFromArray(expectedDataPointArray);
                var dataPointArray = dataPoint.toArray();
                dataPointArray.length.should.equal(expectedDataPointArray.length);
                for (var index = 0; index < expectedDataPointArray.length; index++) {
                    dataPointArray[index].should.equal(expectedDataPointArray[index]);
                }
            }).should.not.throw();
        });
    });

    describe('dataPointArrayFromNumberArray(value)', function () {
        it('should throw an error upon an invalid value being passed', function () {
            var invalidOptions = [null, '', {}, function () {}];
            for (var index = 0; index < invalidOptions.length; index++) {
                var value = invalidOptions[index];
                (function () {
                    dataPointArrayFromNumberArray(value);
                }).should.throw();
            }
        });

        it('should convert the array of number to an array of of data points and not throw an error', function () {
            (function () {
                var expectedDataPointArray = [1.1, 2.2, 3.3, 4.4];
                var dataPointArray = dataPointArrayFromNumberArray(expectedDataPointArray);
                dataPointArray.length.should.equal(expectedDataPointArray.length);
                for (var index = 0; index < expectedDataPointArray.length; index++) {
                    var dataPoint = dataPointArray[index];
                    var array = dataPoint.toArray();
                    array.length.should.equal(1);
                    array[0].should.equal(expectedDataPointArray[index]);
                }
            }).should.not.throw();
        });
    });

    describe('dataPointArrayFromArrayOfNumberArrays(value)', function () {
        it('should throw an error upon an invalid value being passed', function () {
            var invalidOptions = [null, '', {}, function () {}];
            for (var index = 0; index < invalidOptions.length; index++) {
                var value = invalidOptions[index];
                (function () {
                    dataPointArrayFromArrayOfNumberArrays(value);
                }).should.throw();
            }
        });

        it('should convert the array of array of numbers to an array of of data points and not throw an error', function () {
            (function () {
                var expectedDataPointArray = [[1.1, 2.2, 3.3, 4.4], [5.5, 6.6, 7.7, 8.8]];
                var dataPointArray = dataPointArrayFromArrayOfNumberArrays(expectedDataPointArray);
                dataPointArray.length.should.equal(expectedDataPointArray.length);
                for (var index = 0; index < expectedDataPointArray.length; index++) {
                    var dataPoint = dataPointArray[index];
                    var array = dataPoint.toArray();
                    array.length.should.equal(expectedDataPointArray[index].length);
                    for (var dpIndex = 0; dpIndex < expectedDataPointArray[index].length; dpIndex++) {
                        array[dpIndex].should.equal(expectedDataPointArray[index][dpIndex]);
                    }
                }
            }).should.not.throw();
        });
    });
});


