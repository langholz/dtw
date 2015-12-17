# DTW

Dynamic time warping javascript implementation

## Installation

```
npm install dtw
```

## Tests

The test suite can be invoked from the command line like this:
```
npm test
```

## One-dimensional usage

### With number arrays

```js
var DTW = require('dtw');
var s = [1,1,2,3,2,0];
var t = [0,1,1,2,3,2,1];
var dtw = new DTW.DTW();
var cost = dtw.compute(s, t);
var path = dtw.path();
console.log('Cost: ' + cost);
console.log('Path: ');
console.log(path);
```

### With the `DataPoint` class

```js
var DTW = require('dtw');
var DataPoint = DTW.DataPoint;

// Converting from number array to data point array (single number per data point)
var s = [1,1,2,3,2,0];
s = DTW.dataPointArrayFromNumberArray(s);

// Direct use of the DataPoint class
var t = [new DataPoint(0), new DataPoint(1), new DataPoint(1),
         new DataPoint(2), new DataPoint(3), new DataPoint(2),
         new DataPoint(1)];

var dtw = new DTW.DTW();
var cost = dtw.compute(s, t);
var path = dtw.path();
console.log('Cost: ' + cost);
console.log('Path: ');
console.log(path);
```

## Multidimensional usage

For multi-dimensional use, we require the use of the `DataPoint` class.

### Expected usage

```js
var DTW = require('dtw');
var DataPoint = DTW.DataPoint;

var s = [new DataPoint(1, 1), new DataPoint(1, 1), new DataPoint(2, 2),
         new DataPoint(3, 3), new DataPoint(2, 2), new DataPoint(0, 0)];

var t = [new DataPoint(0, 0), new DataPoint(1, 1), new DataPoint(1, 1),
         new DataPoint(2, 2), new DataPoint(3, 3), new DataPoint(2, 2),
         new DataPoint(1, 1)];

var dtw = new DTW.DTW();
var cost = dtw.compute(s, t);
var path = dtw.path();
console.log('Cost: ' + cost);
console.log('Path: ');
console.log(path);
```

### Multi-dimensional DataPoint helpers

If you are using array of number arrays we also provide helpers to convert them to data point array.

```js
var DTW = require('dtw');

// Two-dimensional number array direct conversion to DataPoint array
var s = [[1, 1], [1, 1], [2, 2], [3, 3], [2, 2], [0, 0]];
s = DTW.dataPointArrayFromArrayOfNumberArrays(s);

// Two-dimensional number array with individual conversion to DataPoint array
var tArray = [[0, 0], [1, 1], [1, 1], [2, 2], [3, 3], [2, 2] ,[1, 1]];
var t = new Array();
for (var index = 0; index < tArray.length; index++) {
    var dataPoint = DTW.dataPointFromArray(tArray[index]);
    t.push(dataPoint);
}

var dtw = new DTW.DTW();
var cost = dtw.compute(s, t);
var path = dtw.path();
console.log('Cost: ' + cost);
console.log('Path: ');
console.log(path);
```

## Documentation
* [API reference](./doc/api)
  *  [DTW](./doc/api/dtw.md)
  *  [DataPoint](./doc/api/dataPoint.md)
  *  [DataPoint Helpers](./doc/api/dataPointHelpers.md)

## Future work
* Implement fast (O(n)) and sparse versions.
