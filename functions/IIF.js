/* 
Anonymous functions are functions without names.
Anonymous functions can be used as an argument to other functions or as an immediately invoked function execution.
*/

/* 
Immediately invoked function execution
If you want to create a function and execute it immediately after the declaration, you can declare an anonymous function like this:

(function() {
    console.log('IIFE');
})();
 
How it works.

First, define a function expression:


(function () {
    console.log('Immediately invoked function execution');
})


 
This expression returns a function.
Second, call the function by adding the trailing parentheses ():


(function () {
    console.log('Immediately invoked function execution');
})();


 
and sometimes, you may want to pass arguments into it, like this:

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

(function () {
    console.log(person.firstName} + ' ' + person.lastName);
})(person);
*/

let person = {
    firstname:"shriram tiwari",
    lastname:"arjun tiwari"
};

(function(){
    console.log(person.firstname +" " + person.lastname)
})(person);


let sum = (function(num1,num2){
    return num1+num2;
});
 //the above funciton is an anonyms function
 //function without name is called anonyms function 
 //jab ham function call karenge tabhi wo function excute hoga aur sum ko hamne function expresiion assign kar diya hai
 //console.log(sum(4,5));
 //the above funciton the sum variable is refrence of the anonyms funciton that adds two numbers

 let sumagain= (function(num1,num2){
    return num1+num2;
 })(34,56);
 //ye jo sumagain variable hai ye result hold kar raha hai of the function call
 //The following expression is called an immediately invoked function expression (IIFE) because 
 //the function is created as an expression and executed immediately:
 //yahan pe sumagain varialle refrence nahi hai function ka wo to result store kar raha kyunki funciton immidiately excute ho gaya

 //example of iife
 (function(){
    let a = 4;
    let b = 98;
    console.log(a+b);
 })();//ye function apne aap excute ho gata isko call karne ki jarurat nahi padi 
 //output = 102
 //ab ye jo uper wala function hai bas isi funciton ko hamne ek variable me store kar liya hai in line number 66

 //immidiately invoked function ke andar ham ek aur function bana sakte hain see ex
/*
 const res = (function(){
    console.log("before function call")
    const add= function(num1,num2){
        return num1+num2;
    }
    //function call kar do 
    console.log(add(45,32));
    console.log("functon is excuted");
   
 })();//--> ye parenthesis function call ke liye use hota hai 
 */
 
const iifimportance = (function(){
    function add(a,b){
        console.log("add function excuted")
        return a+b;
    }

    function multiply(a,b){
        console.log("multliply functon excuted")
        return a*b;
    }

    return{
        add:add,
        multiply:multiply
    }
})();
//abhi kya hua ki ye function excute ho gaya hai par uske andar jo add aur multiply funcitons hain wo excute nahi hue hain
//abhi ye function return kar raha hai object jisme add aur multiply methods present hain
let addanswer = iifimportance.add(4,5);
console.log(addanswer)