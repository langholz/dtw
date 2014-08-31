var distance = function (x, y) {
    var difference = x - y;
    var euclideanDistance = Math.sqrt(difference * difference);
    return euclideanDistance;
};

module.exports = {
    distance: distance
};
