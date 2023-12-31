/* 
ES6 introduced two important new JavaScript keywords: let and const.
These two keywords provide Block Scope in JavaScript.
Variables declared inside a { } block cannot be accessed from outside the block:


*/


/* 
Variables declared with the var keyword can NOT have block scope.
Variables declared inside a { } block can be accessed from outside the block.
that is why we will never use var keyword
*/

 /* 
 
 JavaScript has function scope: Each function creates a new scope.

Variables defined inside a function are not accessible (visible) from outside the function.

Variables declared with var, let and const are quite similar when declared inside a function.
 */


 
function show(){
    var b = 5;
const c = 7;
    let a = 4;
    console.log(a)
    console.log(b)
    console.log(c)
}
//console.log(a)//ye error aayega
//console.log(b)//ye print ho jayega jo ki galat hai isiliye ham var ko use nahi karte
//console.log(c)//ye bhi error aayega


console.log(addone(6))//isko pahle likhne par phi ye chal jayega
function addone(num){
 return num+1
}
//console.log(addone(5))


//console.log(addtwo(3))//yahan pe error aayega matlab declaration se pahle usko use nahi kar sakte
const addtwo = function(num){
    return num+2;
}
//console.log(addtwo(3))

//**************************************************arrow functions*******************************************************
/* 
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

this is not a variable. It is a keyword. You cannot change the value of this.

 In strict mode, when used alone, this also refers to the global object:
 "use strict";
let x = this;


JavaScript strict mode does not allow default binding.
So, when used in a function, in strict mode, this is undefined.

"use strict";
function myFunction() {
  return this;
}

In HTML event handlers, this refers to the HTML element that received the event:
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>


*/ 
const user = {
    username:"hitesh",
    price:"999",

    message:function(){
        console.log(`${this.username} , welcome to website `)//this refers to current context in this function
    }
}
user.message()
user.username = "shriram";
user.message()//yahan pe hitesh ki jagah shri ram print hoga

/* function chai(){
    const username = "shriram"
    console.log(this.username);//undefined aa raha hai
}
chai() */

/* const chai = function(){
    const username = "shriram"
    console.log(this.username)//yahan bhi undefined
}
chai()
 */

const chai = ()=>{
    const username = "shriram"
    console.log(this.username)//yahan bhi undefined aayega
}
chai()


const addtwoagain = (num1,num2)=>{
    return num1+num2;
}
console.log(addtwoagain(5,6));

//we can write in another way called implicit return 
//matlab wo apne aap hi return kar dega hame batane ki jarurart hi nahi hai

const newadd = (num1,num2) =>(num1+num2);//he hai implicit return
////ye parenthesis use karna jaruri hai kunki kabhi object return karna hai to wo bina parenthesis ke return hi nahi hoga
//man lo hame object return karna hai
console.log(newadd(4,5));

//object return example
const retobject = ()=>({usename:"shriram tiwari"});
console.log(retobject());




/* 
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};

//alert( sum(1, 2) ); 3
*/


/* 
If there are no arguments, parentheses are empty, but they must be present:

let sayHi = () => alert("Hello!");

sayHi();

*/


/* 
However, this is not associated with arrow functions. 
Arrow function does not have its own this. So whenever you call this, it refers to its parent scope. 

*/