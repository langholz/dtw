var should = require('should');
var DTW = require('../lib/dtw.js');

describe('DTW', function () {
    describe('#Constructor()', function () {
        it('should not throw an error upon no value being passed for initialization', function () {
            (function () {
                var instanceFunctions = [ 'compute', 'path' ];
                var dtw = new DTW();
                instanceFunctions.forEach(function (fn) {
                    var typeName = typeof dtw[fn];
                    typeName.should.equal('function', 'Expected function to be accessible: \'' + fn + '\'');
                });
            }).should.not.throw();
        });
    });

    describe('#Constructor(value)', function () {
        it('should throw an error upon an invalid value being passed for initialization', function () {
            var invalidOptions = [null, '', {}, function () {}];
            for (var index = 0; index < invalidOptions.length; index++) {
                var options = invalidOptions[index];
                (function () {
                    var dtw = new DTW(options);
                }).should.throw();
            }
        });

        it('should throw an error upon an invalid distance metric value being passed for initialization', function () {
            var invalidDistanceMetrics = [null, '', {}, 'ea', undefined, function () {}];
            for (var index = 0; index < invalidDistanceMetrics.length; index++) {
                var distanceMetric = invalidDistanceMetrics[index];
                (function () {
                    var dtw = new DTW({ distanceMetric: distanceMetric });
                }).should.throw();
            }
        });

        it('should throw an error upon an invalid distance function value being passed for initialization', function () {
            var invalidDistanceFunctions = [null, '', {}, 'ea', undefined];
            for (var index = 0; index < invalidDistanceFunctions.length; index++) {
                var distanceFunction = invalidDistanceFunctions[index];
                (function () {
                    var dtw = new DTW({ distanceFunction: distanceFunction });
                }).should.throw();
            }
        });

        it('should throw an error upon an providing both distance metric and function value being passed for initialization', function () {
            (function () {
                var options = {
                    distanceMetric: 'manhattan',
                    distanceFunction: function (x, y) { return x + y; }
                };
                var dtw = new DTW(options);
            }).should.throw();
        });

        it('should not throw an error upon an providing a valid distance metric passed for initialization', function () {
            var validDistanceMetric = ['manhattan', 'manhattaN', 'euclidean', 'eucLidean', 'squaredeuclidean', 'squaredEuclidean'];
            for (var index = 0; index < validDistanceMetric.length; index++) {
                var distanceMetric = validDistanceMetric[index];
                (function () {
                    var options = { distanceMetric: distanceMetric };
                    var dtw = new DTW(options);
                }).should.not.throw();
            }
        });

        it('should not throw an error upon an providing a valid distance function passed for initialization', function () {
            (function () {
                var options = { distanceFunction: function (x, y) { return x + y; } };
                var dtw = new DTW(options);
            }).should.not.throw();
        });
    });

    describe('#compute()', function () {
        it('should compute a valid similarity value for the squared euclidean distance metric', function () {
            var options = { distanceMetric: 'squaredEuclidean' };
            var dtw = new DTW(options);
            var s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
            var t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
            var cost = dtw.compute(s, t);
            cost.should.equal(0);
        });

        it('should compute a valid similarity value for the euclidean distance metric', function () {
            var options = { distanceMetric: 'euclidean' };
            var dtw = new DTW(options);
            var s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
            var t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
            var cost = dtw.compute(s, t);
            cost.should.equal(0);
        });

        it('should compute a valid similarity value for the manhattan distance metric', function () {
            var options = { distanceMetric: 'manhattan' };
            var dtw = new DTW(options);
            var s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
            var t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
            var cost = dtw.compute(s, t);
            cost.should.equal(0);
        });
    });

    describe('#path()', function () {
        it('should compute a valid similarity value and path for the squared euclidean distance metric', function () {
            var options = { distanceMetric: 'squaredEuclidean' };
            var dtw = new DTW(options);
            var s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
            var t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
            var cost = dtw.compute(s, t);
            cost.should.equal(0);
            var path = dtw.path();
            var expectedPath = [[0,0],[1,0],[2,1],[3,2],[4,2],[5,3],[6,4],[7,4],[8,5],[9,6],[10,6],[11,7],[12,7],[13,8],[14,9]];
            path.should.eql(expectedPath);
        });

        it('should compute a valid similarity value and path for the euclidean distance metric', function () {
            var options = { distanceMetric: 'euclidean' };
            var dtw = new DTW(options);
            var s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
            var t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
            var cost = dtw.compute(s, t);
            cost.should.equal(0);
            var path = dtw.path();
            var expectedPath = [[0,0],[1,0],[2,1],[3,2],[4,2],[5,3],[6,4],[7,4],[8,5],[9,6],[10,6],[11,7],[12,7],[13,8],[14,9]];
            path.should.eql(expectedPath);
        });

        it('should compute a valid similarity value and path for the manhattan distance metric', function () {
            var options = { distanceMetric: 'manhattan' };
            var dtw = new DTW(options);
            var s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
            var t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
            var cost = dtw.compute(s, t);
            cost.should.equal(0);
            var path = dtw.path();
            var expectedPath = [[0,0],[1,0],[2,1],[3,2],[4,2],[5,3],[6,4],[7,4],[8,5],[9,6],[10,6],[11,7],[12,7],[13,8],[14,9]];
            path.should.eql(expectedPath);
        });
    });

    describe('algorithm implementation', function () {
        it('should compute valid cost and path 1', function () {
            var s = [
                0.13105,-0.19660,-0.81353,1.49472,0.42999,0.22573,0.91088,
                0.19439,0.87484,0.28494,-1.72894,-0.60786,1.17165,0.62805,
                0.52309,1.76012
            ];
            var t = [
                0.13105,-0.19660,-0.81353,1.49472,0.22573,0.19439,0.28494,
                -0.60786,1.17165,0.62805,0.52309,1.76012,1.76012,1.76012,
                1.76012,1.76012
            ];
            var dtw = new DTW();
            var cost = dtw.compute(s, t);
            cost.should.be.approximately(2.05, 0.01);
            var expectdPath = [
                [0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,6],[8,6],[9,6],
                [10,7],[11,7],[12,8],[13,9],[14,10],[15,11],[15,12],[15,13],[15, 14],[15,15]
            ];
            var path = dtw.path();
            path.should.be.eql(expectdPath);
        });

        it('should compute valid cost and path 2', function () {
            var s = [1,1,2,3,2,0];
            var t = [0,1,1,2,3,2,1];
            var dtw = new DTW();
            var cost = dtw.compute(s, t);
            cost.should.be.approximately(2.0, 0.01);
            var expectedPath = [[0,0],[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]];
            var path = dtw.path();
            path.should.be.eql(expectedPath);
        });
    });
});