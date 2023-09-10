# set
Set
A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:

new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.

For example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be “counted” only once.

Set is just the right thing for that.

 eg.
 let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  console.log(user.name) // John (then Pete and Mary)
}

# for each in set
The forEach() method executes the provided callback once for each value which actually exists in the Set object. It is not invoked for values which have been deleted. However, it is executed for values which are present but have the value undefined.

callback is invoked with three arguments:

the element value
the element key
the Set object being traversed
There are no keys in Set objects, however, so the first two arguments are both values contained in the Set. This is to make it consistent with other forEach() methods for Map and Array.

If a thisArg parameter is provided to forEach(), it will be passed to callback when invoked, for use as its this value. Otherwise, the value undefined will be passed for use as its this value. The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

Each value is visited once, except in the case when it was deleted and re-added before forEach() has finished. callback is not invoked for values deleted before being visited. New values added before forEach() has finished will be visited.

forEach() executes the callback function once for each element in the Set object; it does not return a value.

# eg 
function logSetElements(value1, value2, set) {
  console.log(`s[${value1}] = ${value2}`);
}

new Set(["foo", "bar", undefined]).forEach(logSetElements);

// Logs:
// "s[foo] = foo"
// "s[bar] = bar"
// "s[undefined] = undefined"