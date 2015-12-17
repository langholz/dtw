var distanceHelpers = require('./distanceHelpers');

var distance = function () {
    if (arguments.length % 2 !== 0) {
        throw new Error('Invalid parameters: the provided parameters should be a multiple of two (' + arguments.length + ')');
    }

    var pairsArray = distanceHelpers.createPairsArray(arguments);
    var value = 0.0;
    for (var index = 0; index < pairsArray.length; index++) {
        var difference = pairsArray[index][0] - pairsArray[index][1];
        var square = difference * difference;
        value += square;
    }

    var euclideanDistance = Math.sqrt(value);
    return euclideanDistance;
};

module.exports = {
    distance: distance
};
