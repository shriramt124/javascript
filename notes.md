# introduction
1. brandon naam ke aadmi ne banai thi
2. it is very easy to use
3. it can run on everyy platefrom
4. it has very large community
5. poweful capabilities it can make desktop app as well as website
6. its demand is growing continualsly 
7. its main popularity from jquery
8. DEFAULT BEHAVIOUR OF JAVASCRIPT IS SYNCHRONOUSA

# Primitive
basic 7 types
1.string 2.Number 3.Boolean 4.null 5.undefined 6.symbol 7.bigint
# primitive data types ka refrence memory me directly allocate nahi hota hai yahan pe value ki ek copy pass hoti hai naki refrence 
# kisi bhi value ko unique banane ke liye symbol ka use hota hai

# non primitive data type------>also known as refrence type
 refrence type because memory me inka refrence directly allocate kiya ja sakta hai 
 1. array
 2. objects
 3. functions

 # javascript is dynamically typed language
 # javascript is a single threaded yahan har cheez javascript ke liye ek process hota hai
 1. JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at   runtime and can change throughout the program as we assign different values to them.
 2. seedhi baat ye hai ki kisi bhi value ko declare karne ke liye hame uska data type batane ki jarurat nahi hai to dynamically typed hai
 
 # ------------------>TYPEOF OPERATOR<----------------------------------------
1. val is undefined, return "undefined".
2. If val is null, return "object".
3. If val is a String, return "string".
4. If val is a Symbol, return "symbol".
5. If val is a Boolean, return "boolean".
6. If val is a Number, return "number".
7 . If val is a BigInt, return "bigint".


# -----------------------------------------MEMORY------------------------------------------------------------------>

basically there are two types of memory
1. stack 
2. heap

# primitive data type me -->  stack memory
# non-primitive data type me --> heap memory
 jab bhi stack memory use hoti hai to jo bhi variable aapne declare kiya hai uski ek copy milti hai
 --> agar koi memory heap ke andar define hoti hai to wahan se original value ka refrence milta hai

# imidiately invoked function in javascript 

A JavaScript immediately invoked function expression is a function defined as an expression and executed immediately after creation. The following shows the syntax of defining an immediately invoked function expression:

(function(){
    //...some code
})();


 # Why IIFEs
When you define a function, the JavaScript engine adds the function to the global object. See the following example:

function add(a,b) {
    return a + b;
}
Code language: JavaScript (javascript)
In web browsers, the JavaScript engine adds the add() function to the window global object:

console.log(window.add);
Code language: JavaScript (javascript)
Likewise, if you declare a variable outside of a function using the var keyword, the JavaScript engine also adds the variable to the global object:

var counter = 10;
console.log(window.counter); // 10
Code language: JavaScript (javascript)
If you have many global variables and functions, then JavaScript engine will only release the memory allocated for them until the global object loses its scopes.

As a result, the script may use the memory inefficiently. On top of that, having global variables and functions will likely cause name collisions.

One way to prevent the functions and variables from polluting the global object is to use immediately invoked function expressions.

