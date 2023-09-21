# lastindexof()
The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, 
or -1 if it is not present. The array is searched backwards, starting at fromIndex.

# syntax 
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)

# Description
The lastIndexOf() method compares searchElement to elements of the array using strict equality (the same algorithm used by the === operator). NaN values are never compared as equal, so lastIndexOf() always returns -1 when searchElement is NaN.

The lastIndexOf() method skips empty slots in sparse arrays.

The lastIndexOf() method is generic. It only expects the this value to have a length property and integer-keyed properties.
# eg..
const fruits = ["orange","apple","mango","banana","apple"];
                    0        1      2        3        4

console.log(fruits.lastIndexof('apple'))
//expected output 4
console.log(fruits.lastindexof('tiger'))
expected output  -1
