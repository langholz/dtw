/**
 * Data point helpers
 * @author Elmar Langholz
 */
var dp = require('./dataPoint');

/**
 * Converts a `DataPoint` from an array of number values.
 * @function dataPointFromArray
 * @param {number[]} dataPointArray The array of numbers.
 * @returns {DataPoint} The data point.
 */
function dataPointFromArray(dataPointArray) {
    return dp.createDataPoint(dp.DataPoint, dataPointArray);
}

/**
 * Converts an `Array` of number values to an `Array` of `DataPoint`.
 * @function dataPointArrayFromNumberArray
 * @param {number[]} array The array of numbers.
 * @returns {DataPoint[]} The array of data point.
 */
function dataPointArrayFromNumberArray(array) {
    if (!(array instanceof Array)) {
        throw new TypeError('Invalid input \'' + array + '\' type: expected an array')
    }

    var dataPointArray = new Array();
    for (var index = 0; index < array.length; index++) {
        var value = array[index];
        if (typeof value !== 'number') {
            throw new TypeError('Invalid array element \'' + value + '\' type at index ' + index + ': expected a number');
        }

        var dataPoint = new dp.DataPoint(value);
        dataPointArray.push(dataPoint);
    }

    return dataPointArray;
}

/**
 * Converts an `Array` of `Array` of number values to an `Array` of `DataPoint`.
 * @function dataPointArrayFromNumberArray
 * @param {number[][]} arrayOfArrays The array of array of numbers.
 * @returns {DataPoint[]} The array of data point.
 */
function dataPointArrayFromArrayOfNumberArrays(arrayOfArrays) {
    if (!(arrayOfArrays instanceof Array)) {
        throw new TypeError('Invalid input \'' + arrayOfArrays + '\' type: expected an array')
    }

    var dataPointArray = new Array();
    for (var index = 0; index < arrayOfArrays.length; index++) {
        var value = arrayOfArrays[index];
        if (!(value instanceof Array)) {
            throw new TypeError('Invalid array element \'' + value + '\' type at index ' + index + ': expected an array')
        }

        var dataPoint = dataPointFromArray(value);
        dataPointArray.push(dataPoint);
    }

    return dataPointArray;
}

module.exports = {
    dataPointFromArray: dataPointFromArray,
    dataPointArrayFromNumberArray: dataPointArrayFromNumberArray,
    dataPointArrayFromArrayOfNumberArrays: dataPointArrayFromArrayOfNumberArrays
};
