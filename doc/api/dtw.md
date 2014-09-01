DTW API
=======
**Author:** Elmar Langholz

DTW(\[options\])
----------------
Initializes a new instance of the `DTW`. If no options are provided the squared euclidean distance function is used.


**Parameters**

**[options]**:  *DTWOptions*,  The options to initialize the dynamic time warping instance with.

class DTWOptions
----------------
**Members**

**distanceMetric**:  *string*,  The distance metric to use: `'manhattan' | 'euclidean' | 'squaredEuclidean'`.

**distanceFunction**:  *function*,  The distance function to use. The function should accept two numeric arguments and return the numeric distance. e.g. function (a, b) { return a + b; }

class DTW
---------
**Methods**

DTW.compute(firstSequence, secondSequence, \[window\])
------------------------------------------------------
Computes the optimal match between two provided sequences.


**Parameters**

**firstSequence**:  *number[]*,  The first sequence.

**secondSequence**:  *number[]*,  The second sequence.

**[window]**:  *number*,  The window parameter (for the locality constraint) to use.

**Returns**

*number*,  The similarity between the provided temporal sequences.

DTW.path()
----------
Retrieves the optimal match between two provided sequences.


**Returns**

*number[]*,  The array containing the optimal path points.

