var should = require('should');
var DataPoint = require('../lib/dataPoint').DataPoint;

describe('DataPoint', function () {
    describe('#Constructor()', function () {
        it('should throw an error upon no value being passed for initialization', function () {
            (function () {
                var dataPoint = DataPoint();
            }).should.throw();
        });
    });

    describe('#Constructor(value)', function () {
        it('should throw an error upon an invalid value being passed for initialization', function () {
            var invalidOptions = [null, '', {}, function () {}];
            for (var index = 0; index < invalidOptions.length; index++) {
                var value = invalidOptions[index];
                (function () {
                    var dataPoint = new DataPoint(value);
                }).should.throw();
            }
        });

        it('should not throw an error upon a valid value being passed for initialization', function () {
            (function () {
                var dataPoint = new DataPoint(0.3);
            }).should.not.throw();
        });
    });

    describe('#Constructor(value1, value2)', function () {
        it('should throw an error upon an invalid value being passed for initialization', function () {
            var invalidOptions = [null, '', {}, function () {}];
            for (var index = 0; index < invalidOptions.length; index++) {
                var value = invalidOptions[index];
                (function () {
                    var dataPoint = new DataPoint(0.3, value);
                }).should.throw();
            }
        });

        it('should not throw an error upon a valid value being passed for initialization', function () {
            (function () {
                var dataPoint = new DataPoint(0.3, 0.9);
            }).should.not.throw();
        });
    });

    describe('#reduce(function)', function () {
        it('should throw an error upon an invalid value being passed for reduction', function () {
            (function () {
                var dataPoint = new DataPoint(0.3, 0.6);
                dataPoint.reduce(1.2);
            }).should.throw();
        });

        it('should not throw an error upon a valid function being passed for reduction', function () {
            (function () {
                var dataPoint = new DataPoint(1.0, 1.0);
                var value = dataPoint.reduce(function (x, y) { return x + y; });
                value.should.equal(2.0);
            }).should.not.throw();
        });
    });

    describe('#concat(DataPoint)', function () {
        it('should throw an error upon an invalid value being passed for concatenation', function () {
            var invalidOptions = [null, '', {}, function () {}];
            for (var index = 0; index < invalidOptions.length; index++) {
                var value = invalidOptions[index];
                (function () {
                    var dataPoint1 = new DataPoint(1.0, 2.0);
                    var dataPoint2 = dataPoint1.concat(value);
                }).should.throw();
            }
        });

        it('should not throw an error upon a valid data point being passed for concatenation', function () {
            (function () {
                var dataPoint1 = new DataPoint(1.0, 2.0);
                var dataPoint2 = new DataPoint(3.0, 4.0);
                var expectedValues = [1.0, 2.0, 3.0, 4.0];
                var dataPoint3 = dataPoint1.concat(dataPoint2);
                var concatenatedDataPointArray = dataPoint3.toArray();
                for (var index = 0; index < concatenatedDataPointArray.length; index++ ) {
                    var value = concatenatedDataPointArray[index];
                    value.should.equal(expectedValues[index]);
                }
            }).should.not.throw();
        });
    });

    describe('#toString()', function () {
        it('should not throw an error and should return a valid string', function () {
            (function () {
                var dataPoint = new DataPoint(1.05, 2.05);
                dataPoint.toString().should.equal("(1.05, 2.05)")
            }).should.not.throw();
        });
    });

    describe('#toArray()', function () {
        it('should not throw an error and should return a valid array', function () {
            (function () {
                var expectedDataPointArray = [1.05, 2.05];
                var dataPoint = new DataPoint(1.05, 2.05);
                var array = dataPoint.toArray();
                array.length.should.equal(expectedDataPointArray.length);
                for (var index = 0; index < expectedDataPointArray.length; index++) {
                    array[index].should.equal(expectedDataPointArray[index])
                }
            }).should.not.throw();
        });
    });

    describe('#equals(DataPoint)', function () {
        it('should throw an error upon an invalid value being passed for concatenation', function () {
            var invalidOptions = [null, '', {}, function () {}];
            for (var index = 0; index < invalidOptions.length; index++) {
                var value = invalidOptions[index];
                (function () {
                    var dataPoint = new DataPoint(1.0, 2.0);
                    dataPoint.equals(value);
                }).should.throw();
            }
        });

        it('should not throw an error upon a valid function being passed for reduction', function () {
            (function () {
                var dataPoint1 = new DataPoint(1.0, 2.0);
                var dataPoint2 = new DataPoint(2.0, 1.0);
                var dataPoint3 = new DataPoint(1.0, 2.0);
                dataPoint1.equals(dataPoint2).should.equal(false);
                dataPoint1.equals(dataPoint3).should.equal(true);
            }).should.not.throw();
        });
    });

    describe('#size()', function () {
        it('should return a proper value representing the count of numbers that the data point represents', function () {
            (function () {
                var dataPoint1 = new DataPoint(1.05);
                dataPoint1.size().should.equal(1);
                var dataPoint2 = new DataPoint(1.05, 2.05);
                dataPoint2.size().should.equal(2);
            }).should.not.throw();
        });
    });
});

