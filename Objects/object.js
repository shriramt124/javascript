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
function emp(id,name,city){//ye function ek constructor ki tarah kaam kar raha hai
    this.id = id;
    this.name = name;
    this.city = city;
}
const constobj = new emp(890,"shriram","idnore");//new keyword ka jadoo hai ki ye object bana deta hai
console.log(constobj)
const employee ={
    name:"shriram",
    age:'22',
    salary:"0000",
}
console.log(employee)
const keyvalues = Object.keys(employee)//return array of keys 
console.log(keyvalues)
const valuesofkey = Object.values(employee)//return an array of vlaues of keys
console.log(valuesofkey)

const keyvaluepairs = Object.entries(employee)//return an arrya of array 
console.log(keyvaluepairs)//[ [ 'name', 'shriram' ], [ 'age', '22' ], [ 'salary', '0000' ] ]

//if we again want to make object using keyvalue pairs then 
const retobject = Object.fromEntries(keyvaluepairs)
console.log(retobject)
 
//object ko dursre variable me assign kar sakte hain
const assignobject = Object.assign({},employee);//employe object empty object me copy hua aur wo assignobject me assign ho gaya

console.log(assignobject)
//ye jo assignobject and employee object hain bhale hi employee naam ke object ki values assign hui hai assignobject naam 
//ke object me par dono hi memory me alag alag refer kar rahe ha
//yani ki dono same nahi hain 
console.log(assignobject == employee)//output false because dono alag memory occupy kar rahe hain

//object ko freez karne ke baad ham usme kisi bhi value ko change or modify nahi kar sakte
//dhyan rahe na hi ham kisi vlaue ko add kar sakte hain nahi modify kar sakte hain

Object.freeze(employee);
employee.name = "arjun"
console.log(employee.name)//yahan name change nahi hua kynki ham object ko freeze kar chuke hain

//check karsakte hain ki freeze hai ki nahi
console.log(Object.isFrozen(employee))//agar freeze hoga to true aayega nahi to false aayega

//ek seal method aur Object.isseal() method hoga 
// Object.seal() karne se ham nayi propery add nahi kar sakte ham par existing propery ko modify kar sakte hain 
var newemp = {
    name:"ram",
    age:'50',
    salary:5000,
}
newemp.branch = "cse"//Object.seal() ke pahle nayi property add ho gayi
console.log(newemp)//{ name: 'ram', age: '50', salary: 5000, branch: 'cse' }
Object.seal(newemp);//seal kar diya 
newemp.id = "780"
console.log(newemp)//{ name: 'ram', age: '50', salary: 5000, branch: 'cse' }
newemp.marks = 90//nayi propery add nahi hogi seal ke baad 
newemp.name = "arjun"//existing propety modify ho jayegi seal ke baad
console.log(newemp)//{ name: 'arjun', age: '50', salary: 5000, branch: 'cse' }

console.log(Object.isSealed(newemp))//agar sealed hoga to true aayega


 console.log(Object.hasOwn(employee,'name'))//check kiye ki kya employe naam ke object ke andar name key present hai ki nahi
 console.log(Object.getOwnPropertyNames(employee))//emplyee object ke andar sare ownproperty ka array aa jayega
 //[ 'name', 'age', 'salary' ]
let descriptor =  console.log(Object.getOwnPropertyDescriptor(newemp,'name'))
/*{
    value: 'arjun',
    writable: true,
    enumerable: true,
    configurable: false
  }
  */
console.log(descriptor)

//ab agar hame value ,writable,configurable ko change karna hai to ham Object.definePrroperty use karte hain
const properytesting = {
    name:"papa",
    branch:"autoparts",
}
Object.defineProperty(properytesting,'name',{
    value:'priyanka',
    writable:false,
    enumerable:true,
    configurable:true
})
let newdescriptor = Object.getOwnPropertyDescriptor(properytesting,'name')
console.log(newdescriptor)
//agar do properties ke bare me detail dalna hai
let data = {
    name:"palher",
    branch:"textile",
}
Object.defineProperties(data,{
    name:{
        value : "beta",
        writable:false,
        configurable:false,
        enumerable:true,//enumerable means ye value mujhe loop ke through nahi milegi
    },
    branch:{
        value:"cse",
        writable:false,
        enumerable:true,
    }
})
 console.log(Object.keys(data))
 let des = Object.getOwnPropertyDescriptor(data,"branch")
 console.log(des);
  
