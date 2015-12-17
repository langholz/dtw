# Global





* * *

## Class: DataPoint
Create a DataPoint object

### DataPoint.DataPoint(any) 

Initializes a new instance of the `DataPoint` class.

**Parameters**

**any**: `any`, The list of values to initialize the instance with.


### DataPoint.size() 

The count of numbers that the data point represents.

**Returns**: `number`, The size of the data point.

### DataPoint.reduce(reduceFunction) 

Reduces the point values to a specific value.

**Parameters**

**reduceFunction**: `function`, The function which is used to reduce.

**Returns**: `number`, The value which represents the reduction of the points.

### DataPoint.concat(dataPoint) 

Concatenates the current data point with another.

**Parameters**

**dataPoint**: `DataPoint`, The data point to concatenate.

**Returns**: `DataPoint`, The new constructed data point created through concatenation.

### DataPoint.toString() 

Converts the data points to a string.

**Returns**: `string`, The data point represented as string.

### DataPoint.toArray() 

Converts the data point to an array.

**Returns**: `Array.&lt;number&gt;`, The array of points.

### DataPoint.equals(dataPoint) 

Determines whether or not the current data point equals the provided.

**Parameters**

**dataPoint**: `DataPoint`, The data point to compare.

**Returns**: `boolean`, True if it does equal; otherwise, false.



* * *










