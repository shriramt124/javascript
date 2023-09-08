//array
/* 
JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

*/

/* 
A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) 
as those of the source object from which the copy was made. As a result, when you change either the source or the copy, 
you may also cause the other object to change too. That behavior contrasts 
with the behavior of a deep copy, in which the source and copy are completely independent.

*/
const myarr = [1,2,3,4,true,"shakiman","heroes"]
console.log(myarr[0])

const myarr2 = new Array(4,5,6,7)//array can be declare like this too


//push is used to insert elements in array and pop() is used to delete last elemet
const fruits = [];
fruits.push("banana", "apple", "peach");
fruits.push("rama")
fruits.pop();
console.log(fruits.length); // 3

//unshift()se value array ke starting me add ho jati hai
fruits.unshift(567);
console.log(fruits)
//shift se starting value delete ho jati hai
fruits.shift();//ye koi parameter nahi leta hai
console.log(fruits)
console.log(fruits.includes("banana"))//it means array me banana present hai 
console.log(fruits.indexOf("banana"))//banana ka index return kar dega if it returns -1 then it means the value is not present in the array

const newaray = fruits.join();//isse sari values string me convert ho gati hai comma seperated
/* 
Adds all the elements of an array into a string, separated by the specified separator string.

@param separator — A string used to separate one element of the array from the next in the resulting string. 
If omitted, the array elements are separated with a comma.
*/
//console.log(fruits)
//console.log(newaray)
//console.log(typeof newaray)

//slice or splice
//console.log("A ",myarr);
const myn1 = myarr.slice(1,3)//yahan pe 1 se 3[excluded] tak vlaues print ho jayegi
//console.log(myn1)
//console.log("B ",myarr)

const myn2 = myarr.splice(1,3);
console.log(myn2)
//console.log("c ",myarr)
 
//bhai splice se original array change ho jati hai jabki slice se original array change nahi hoti hai

const marvel = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]
//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//marvel.push(dc);
//console.log(marvel)//array ke andar arrya aa gaya yahan pe array ke single element hai 
//console.log(marvel[3])

const mynewarray = marvel.concat(dc)
console.log(mynewarray)//isse pura array merge ho gaya

const allnewheros = [...marvel,...dc] //... called as spread operator
console.log(allnewheros)

const anotherarray = [1,2,3,[4,5,6],7,[8,9]]
/* 
Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
*/
let realarray = anotherarray.flat(Infinity)
console.log(realarray)


console.log(Array.isArray("ram"))//ye array nahi hai 
console.log(Array.from("ram"));//uper wali value array nahi thi to isse wo array ban gayi

console.log(Array.from({name:"shriram"}))//very intresting situation
//abhi to ye empty array dega isko batana padega ki array keys ka banana hai ki values ka

//multiple variables ko arrays me convert karna

let score1  =100
let score2 = 200
let score3 = 300
let score4 = 400
console.log(Array.of(score1,score2,score3,score4))//sare individual elements array me convert ho gayi

let numbers = [10,20,30]
numbers.push(54);
numbers.push(56)
let popitem = numbers.pop()
console.log("popped item is : "+popitem)
console.log(numbers)
 
 



