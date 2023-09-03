"use strict"//ye linkhne se sara js ka code likha hua treated as newer version of javascript  through engine
//alert(3+3)//we are using node js not browser so it will show error in  node js
console.log(3+3)

//numbet 2 to power 53
//bigint
//string =>""//prefer double quotes FOR STRINGS
//boolean  =>true/false
//null =>standalone value -->it is a representation of empty value
//undefined -->variable with no value
//symbol =>uniquenes 

//object


console.log(typeof 6)//it will give output as number
console.log(typeof null)//it will give output as object 
console.log(typeof undefined)//it will give as undefined

/* 
null is not a type null is an object
*/
//let score = "33abc";
//let score = null;
//let score  = undefined
//let score = true;
let score = "shriram"
console.log(typeof score);
console.log(typeof(score));
let valueNumber = Number(score);//used to convert in integer because score was a string
console.log(typeof valueNumber);//yani ki score ab number me convert ho gaya hai
console.log(valueNumber)
//NaN bhi ek special type hai

//33 => 33
//"33abc" =>NaN
//true ==>1
//false ==>0
//null ==> 0
//"shriram" ==>NaN
//undefined ==>NaN

let isLoggedIn = "ram";//lets convert it to boolean
let boolIsLoggedIn = Boolean(isLoggedIn);
console.log(boolIsLoggedIn);
//1 -->true
//0 -->false
//""-->false
//"ram" -->true

let someNumber = 33;
let stringnumber = String(someNumber);
console.log(stringnumber);
console.log(typeof stringnumber);//now 33 is converted to string