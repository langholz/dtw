# Global





* * *

## Class: DTW
Create a DTW object

### DTW.DTW(options) 

Initializes a new instance of the `DTW`. If no options are provided the squared euclidean distance function is used.

**Parameters**

**options**: `DTWOptions`, The options to initialize the dynamic time warping instance with.


### DTW.compute(firstSequence, secondSequence, window) 

Computes the optimal match between two provided sequences.

**Parameters**

**firstSequence**: `Array.&lt;number&gt;`, The first sequence.

**secondSequence**: `Array.&lt;number&gt;`, The second sequence.

**window**: `number`, The window parameter (for the locality constraint) to use.

**Returns**: `number`, The similarity between the provided temporal sequences.

### DTW.path() 

Retrieves the optimal match between two provided sequences.

**Returns**: `Array.&lt;number&gt;`, The array containing the optimal path points.



* * *










