var dp = require('./dataPoint');
var DataPoint = dp.DataPoint;

function validateSequence(sequence, sequenceParameterName) {
    if (!sequenceIsArray(sequence)) {
        throw new TypeError('Invalid sequence \'' + sequenceParameterName + '\' type: expected an array');
    }

    if (!sequenceHasAtLeastOneValue(sequence)) {
        throw new Error('Invalid number of sequence data points for \'' + sequenceParameterName + '\': expected at least one');
    }
}

function validateDataPointSequence(sequence, sequenceParameterName) {
    if (!sequenceIsDataPointArray(sequence)) {
        throw new TypeError('Invalid sequence \'' + sequenceParameterName + '\' type: expected an array of number\'s or DataPoint\'s');
    }
}

function sequenceIsArray(sequence) {
    var isArray = sequence instanceof Array;
    return isArray;
}

function sequenceHasAtLeastOneValue(sequence) {
    var hasAtLeastOneValue = sequence.length > 0;
    return hasAtLeastOneValue;
}

function sequenceIsNumberArray(sequence) {
    var isNumberArray =  typeof sequence[0] === 'number';
    return isNumberArray;
}

function sequenceIsDataPointArray(sequence) {
    var isDataPointArray = sequence[0] instanceof DataPoint;
    return isDataPointArray;
}

module.exports = {
    sequence: validateSequence,
    dataPointSequence: validateDataPointSequence,
    sequenceIsArray: sequenceIsArray,
    sequenceHasAtLeastOneValue: sequenceHasAtLeastOneValue,
    sequenceIsNumberArray: sequenceIsNumberArray,
    sequenceIsDataPointArray: sequenceIsDataPointArray
};
