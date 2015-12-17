module.exports = {
    DTW: require('./lib/dtw'),
    DataPoint: require('./lib/dataPoint').DataPoint,
    dataPointFromArray: require('./lib/dataPointHelpers').dataPointFromArray,
    dataPointArrayFromNumberArray: require('./lib/dataPointHelpers').dataPointArrayFromNumberArray,
    dataPointArrayFromArrayOfNumberArrays: require('./lib/dataPointHelpers').dataPointArrayFromArrayOfNumberArrays
};
