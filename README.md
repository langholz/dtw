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

## Usage

```js
var DTW = require('dtw');
var s = [1,1,2,3,2,0];
var t = [0,1,1,2,3,2,1];
var dtw = new DTW();
var cost = dtw.compute(s, t);
var path = dtw.path();
console.log('Cost: ' + cost);
console.log('Path: ');
console.log(path);
```

## Documentation
* [API reference](./doc/api/dtw.md)

## Future work
* Implement fast (O(n)) and sparse versions.
