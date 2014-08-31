var distance = function (x, y) {
    var difference = x - y;
    var manhattanDistance = Math.abs(difference);
    return manhattanDistance;
};

module.exports = {
    distance: distance
};
