var comparison = require('./comparison');

function validateDataPointArguments(args) {
    if (args.length <= 0) { throw new Error('Expected at least a single value'); }
    for (var index = 0; index < args.length; index++) {
        if (typeof args[index] !== 'number') {
            throw new TypeError('Invalid argument type at index ' + index + ': expected a number');
        }
    }
}

function createDataPoint(constructor, dataPointArray) {
    function Constructor() {
        return constructor.apply(this, dataPointArray);
    }

    Constructor.prototype = constructor.prototype;
    return new Constructor();
}

/**
 * Create a DataPoint object
 * @class DataPoint
 */
/**
 * Initializes a new instance of the `DataPoint` class.
 * @function DataPoint
 * @param {any} any The list of values to initialize the instance with.
 */
/**
 * The count of numbers that the data point represents.
 * @method size
 * @returns {number} The size of the data point.
 */
/**
 * Reduces the point values to a specific value.
 * @method reduce
 * @param {function} reduceFunction The function which is used to reduce.
 * @returns {number} The value which represents the reduction of the points.
 */
/**
 * Concatenates the current data point with another.
 * @method concat
 * @param {DataPoint} dataPoint The data point to concatenate.
 * @returns {DataPoint} The new constructed data point created through concatenation.
 */
/**
 * Converts the data points to a string.
 * @method toString
 * @returns {string} The data point represented as string.
 */
/**
 * Converts the data point to an array.
 * @method toArray
 * @returns {number[]} The array of points.
 */
/**
 * Determines whether or not the current data point equals the provided.
 * @method equals
 * @param {DataPoint} dataPoint The data point to compare.
 * @returns {boolean} True if it does equal; otherwise, false.
 */
function DataPoint() {
    validateDataPointArguments(arguments);
    var size = arguments.length;
    var data = new Array();

    function initialize(args) {
        for (var index = 0; index < size; index++) {
            data.push(args[index]);
        }
    }

    this.size = function () {
        return size;
    };

    this.reduce = function (reduceFunction) {
        if (typeof reduceFunction !== 'function') {
            throw new TypeError('Invalid reduceFunction type: expected a function');
        }

        return reduceFunction.apply(this, data);
    };

    this.concat = function (dataPoint) {
        if (!(dataPoint instanceof DataPoint)) {
            throw new TypeError('Invalid dataPoint type: expected a DataPoint');
        }

        size += dataPoint.size;
        var concatenatedArray = data.concat(dataPoint.toArray());
        var concatenatedDataPoint = createDataPoint(DataPoint, concatenatedArray);
        return concatenatedDataPoint;
    };

    this.toString = function () {
        var arrayAsString = data.join(', ');
        var str = '(' + arrayAsString + ')';
        return str;
    };

    this.toArray = function () {
        return data;
    };

    this.equals = function (dataPoint) {
        if (!(dataPoint instanceof DataPoint)) {
            throw new TypeError('Invalid dataPoint type: expected a DataPoint');
        }

        var dataPointArray = dataPoint.toArray();
        var equal = size == dataPointArray.length;
        if (equal) {
            var epsilon = 1e-14;
            for (var index = 0; index < size && equal; index++) {
                equal = comparison.nearlyEqual(dataPointArray[index], data[index], epsilon);
            }
        }

        return equal;
    };

    initialize(arguments)
}

module.exports = {
    DataPoint: DataPoint,
    createDataPoint: createDataPoint
};
