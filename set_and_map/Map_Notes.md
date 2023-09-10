# map
Map is a collection of keyed data items, just like an Object. 
But the main difference is that Map allows keys of any type.

Methods and properties are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.


# eg.
let map  = new Map();
map.set('1','stringvalue)
map.set(1,'integer value')
map.set(true,'booleanvlue')

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log(map.get(1));
console.log(map.get('1'));
# As we can see, unlike objects, keys are not converted to strings. Any type of key is possible.
1. Map can also use objects as keys.
2. Using objects as keys is one of the most notable and important Map features. The same does not count for Object. String as a key in Object is fine, but we can’t use another Object as a key in Object.

# Iteration over Map
For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

# The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object.
# Object.entries: Map from Object
# If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.


# We can use Object.fromEntries to get a plain object from Map
# A call to map.entries() returns an iterable of key/value pairs, exactly in the right format for Object.fromEntries.
