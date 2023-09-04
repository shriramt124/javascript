//singleton --> jab bhi ham literal ki tarah use karte hain to singleton nahi banta hai

//object literals
const msym = Symbol("key1")//declaring a symbol


const juser  = {
    name:"shriram",
//  key : value
     age:18,
     "full name":"shriram tiwari",
     location:"indore",
     email:"ram@gmail.com",
     isloggedin:false,
     lastlogindays :["monday","tuesday"] ,
     //mysm:"mykey1"//print to ho jayega par ye symbol ki tarah use nahi ho raha ye(mysym) string ko tarah use ho raha hai
     [msym]:"mykey2"//ab ye sumbol ki tarah use ho raha hai
}
 console.log(juser.age)//it is not wrong way but not correct either kynki agar koi key hi string hai to ham isse access nahi kar sakte
 console.log(juser["email"])
 console.log(juser["full name"])//string keys ko ham square brakets se hi use kar sakte hain
 console.log(juser[msym])//ab ye symbol ki tarah use ho raha hai 
 

 juser.email = "chatgpt@gmail.com"
 //man lo ham ye chahte hain ki koi hamare object ki values change nahi kar sake to ham object ko freez kar denge

 //Object.freeze(juser);
 juser.email = "sagar@gamil.com"//freez hone ke baad ye change karne par koi error nahi aayega par ye change nahi hoga
 console.log(juser)

 //object ek function bhi store kar sakta hai

 juser.greeting = function(){
    console.log("hello you idiot user");
 }
 //console.log(juser.greeting)//ye ab undefined aayega kyunki function ek method hai

console.log(juser.greeting());
juser.greeting2 = function(){
    console.log(`hello js user,${this.name}`)//same object ko refrence user karne ke liye ham this use karte hain
}
console.log(juser.greeting2())

/* 
The key of a property can be a string. And the value of a property can be any value, 
e.g., a string, a number, an array, and even a function.

To delete a property of an object, you use the delete operator:
delete objectName.propertyName;


*/
