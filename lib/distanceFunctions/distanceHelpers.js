function createPairsArray(args) {
    var pairsArray = new Array();
    var pairCount = args.length / 2;
    for (var index = 0; index < pairCount; index++) {
        var value1 = args[index];
        var value2 = args[index + pairCount];
        pairsArray.push([value1, value2]);
    }

    return pairsArray;
}

module.exports = {
    createPairsArray: createPairsArray
};