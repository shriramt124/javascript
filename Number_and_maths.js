const score = 400
console.log(score)
//agar mujhe bas number hi chahiye 
const balance = new Number(300) //new object jo ki number type ka hai
console.log(balance)
console.log(balance.toString())//ab ye string me convert ho gaya hai to sari string ki propery uske paas aa gayi
console.log(balance.toFixed(2))
//const otherNumber = 23.8966
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3))
/* toPrecision(precision?: number | undefined): string
Number of significant digits. Must be in the range 1 - 21, inclusive.


Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits. */

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'))

// ********************************     mahs    ****************************************************************

/*
console.log(Math)
console.log(Math.abs(-6))
console.log(Math.round(4.3))
console.log(Math.round(4.6))

console.log(Math.ceil(4.2))

console.log(Math.floor(4.9))
console.log(Math.min(4,3,6,8))
console.log(Math.max(4,3,6,8))
console.log(Math.sqrt(25))
*/
console.log(Math.random()) //it will produce value in between 0 and 1 always

console.log((Math.random()*10)+1)//hamne 10 se multiply kiya to value 0 se 9 ke beech me rahegi aur zero ko avoid karne ke liye 1 add kar diya

const min = 10//starting range
const max = 20//end range

console.log(Math.floor(Math.random()*(max-min+1))+min)//is formulae se hame start aur end range ke beech hi values milegi
