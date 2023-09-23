let nums = [10,20,30,40]
//array destructing 
//ham values ko extract kar rahe hain array se 
 const [a,b,c] = nums;
 console.log(a,b,c)
 //10 20 30

 //string ko array me convert kar sakte hain through split
 let str  = 'hello world'.split(" ");
 console.log(str)

//  let name = 'Raj kapoor'.split(" ")
//  console.log(name)
let[firstname,surname] = 'Raj kapoor'.split(" ");
console.log(firstname ,surname);//ye dono naye variables hain 

let newnums = [10,20,30,40,50]
//man lo hame 20 chahiye nahi direct 30 chahiye 
//age value use hi nahi karni  to wahan pe empty value chhod do 
const [p,,q,d] = newnums;
console.log(p,q,d)
//yani unwanted elements ke liye ham space with comma chhod sakte hain
let [m,n,o] = 'hello'
console.log(m,n,o)
//concept yahi hai ki aap values ko extract karke naye variables me dal rahe ho 

   let setdata =   new Set([1,1,2,2,3,3,4,4])
   console.log(setdata)//Set(4) { 1, 2, 3, 4 }
 
   let [x,y,z] = new Set([1,1,2,2,3,3,4,4])//destructuring of set 
   console.log(x,y,z)

 /*   let user = {};
  [user.name,user.surname]  = "john pete".split(" ")//destructure ho gaya
  console.log(user.name)
  console.log(user.surname)
   */

  let firstName = 'john';
  let lastName = 'peter';
  //hame in dono ko swap karna hai 
[lastName,firstName] =   [firstName,lastName] ;
console.log(firstName)//peter
console.log(lastName)//john

//object destructuring 
const user = {
    email:'john@gmail.com',
    username:'john'
}
let {username,email} = user;
console.log(username,email)

let employee = {
    empId :1,
    userName:'john doe',
}
//const {empId,userName,depart ="None"} = employee;//giving default value to depart
const {empId:id,userName:newuser,depart ="none"} = employee;
 //console.log(empId,userName,depart)//gives error becauser empId is changed to id
 console.log(id,newuser,depart)
 const user1 = {
    name:'john',
    age:30,
    city:'delhi',
    occupation:'engineer',
    hobbies:['coding','music','travel'],
    comments:{
        id:'232',
        date:'21 july 2023',
        post:'This is a sample post'
    }
 }
 //const {name,age,occupation} = user1
 //console.log(name,age,occupation)

 //smart function parameter
//  function SpecialFunc({occupation,name,age}){//parameters ke andar hi destructing kar sakte hain 
//     console.log(occupation,name,age)
//  }
//  SpecialFunc(user1)
const {name,age,occupation,comments:{id:commentid,post}} = user1;
console.log(name,age,occupation,commentid,post)

//... ye three dots spread and rest operatior ko denote karte hain 
//spread --> iterable ko convert kar deta hai single single arguments me 
// rest --> elements ko array ke andar convert kar deta hai 
// new array creae kar sakte hain 
//adding new values 
//concatenate two arrays
 //spread an array of arguments as individual 
 //can be used with strings 
//spread operator ko ham objects ke saath use kar sakte hain 
let nums2 = [10,20,30,40]
//let newArr = nums;//yahan passed by refrence ho gaya par hame copy pass karni hai 
let newArr = [...nums2]//spread operator se copy ho gaya ye naya copy create hua hai 
console.log(newArr)

//adding new values 
let arr3 = [10,20,30,40]
let newarr1 = [...arr3,40]//ek array me ham arr3 ke sare elements copy kar rahe hain aur ek naya element 40 dal rahe hain
console.log(newarr1)

let obj = {
    name:'pw-skills',
    course:'full-stack development',
}
let newobject = {...obj,rating:5}//copy of objects 
console.log(newobject)

//concatenation of two arrays 
let arr1 = [10,20];
let arr2 = [30,40];
let concatenateArr = [...arr1,...arr2]//hame concate array mil jayega
console.log(concatenateArr)
 
let newnums1 = [10,20,40,30]
let sum = newnums1.reduce((prev,curr) => prev+curr,0)
console.log(sum)
function calculateMax(num1,num2,num3){
    return Math.max(num1,num2,num3)
}
console.log(calculateMax(...newnums1))//spread operator se individual element pass kar sakte hain 

let name1 = 'PW-skills';
let arrayOfCharacters = [...name1]//ye ham split se bhikar sakte hain
//let arrayOfCharacters = name1.split('');
console.log(arrayOfCharacters)

let object1 = {
    name:'pw-skills',
    course:'fullstack',

}
let object2 = {
    rating:5,
    reviews:4000,
}
let newobj = {...object1,...object2}
//agar key same hai to bad wale object ka key lelega 
console.log(newobj)

//Rest operator 
//collecting all parameter in a function 
function sumOfAllNumbers(...numbers){//parametrs ke saath ye rest operator kahlatega 
console.log(numbers)//rest se ye individual element array me convert ho gaya 
let sum = numbers.reduce((prev,curr)=>prev+curr,0);
return sum;

}
console.log(sumOfAllNumbers(1,2,3,4,5))

//destructuring 
let arr = ["HTML","CSS","JS","React","Node"]
let [element1,element2,...remaining] =arr;
console.log(element1,element2)
console.log(remaining)//using rest operator baki bache hue elements array me convert ko gaye in remaining 

