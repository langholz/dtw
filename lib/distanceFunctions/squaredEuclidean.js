var distance = function (x, y) {
    var difference = x - y;
    var squaredEuclideanDistance = difference * difference;
    return squaredEuclideanDistance;
};

module.exports = {
    distance: distance
};
