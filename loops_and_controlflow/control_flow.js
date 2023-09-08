const isuserloggedin = false

if(isuserloggedin){
    console.log("yes user is loggedin");
}
else{
    console.log("user is not logged in")
}
const isdebitcard = true;
const islogin = true;
if(isdebitcard && islogin){
    console.log("yes excuted ")
}

const month = "may"
switch (month) {
    case "may":console.log("may")       
                break;
    case "march":console.log("june")
               break;

    default:console.log("default is ecxuted")
        break;
}

//const useremail = "shriram tiwari"
const useremail = ""//ye empty hai to ye else wala condition chalega
if(useremail){
    console.log("got the useremail")
}
else{
    console.log("not got user email")
}

//falsy values
/* 
false ,0,-0,BigInt 0n,"",null,Na
N ---------->these are all falsy values 


*/

//truthy values
//"0",string ke agar zero hai to wo truthy value hai 
//'false' -->ye bhi truthy value hai kynki ye string ke andar likhi hai
//[]," ",{},function(){}

const emptyObj ={};
if(Object.keys(emptyObj).length == 0){
    console.log("object is mepty")
}

//nullish coalescing Operator(??):null undefined
let val;
val = 5??10
console.log(val)
let val1 = null??10//yahan par null asign nahi hoga
console.log(val1)

for(let i = 0;i<5;i++){
    for(let j = i;j<5;j++){
        //console.log(i+j)
    }
}
let i = 0;
while ( i<5) {
    //console.log(i);
    i++;
}

function greeting({name,city}){

    console.log(`hello ${name} from city ${city}`)
}
//greeting("ram", "indore")par agar ham yahan pe name aur city interchange kar denge to erraor aayega
//--------->greeting("idnore","ram")//hello idnore from city ram
//yahan pe galat output aaya hai to ham greeting me object hi paas kar denge

greeting({name:"shriram",city:"indore"})//yahan pe ham object paas kar rahe hain to uper bbhi object hi recieve karega

function addcart(...nums){

console.log(arguments)//inbuilt object hai ye arguments 
//it gives ouput as array like structures

//ye arguemnts array nahi hai par ye array like structure hai to bahut sari mthods ham use nahi kar sakte
//to ham ek kam karte hain ki usko array me kar sakte hain
const argsarray = Array.from(arguments)//ab ye array ban gaya
console.log(argsarray);

}
 addcart(1,2,3,4,4);

 function addc(...nums){//sare arguments ko store karke apne aap aray ne convert kardega
   console.log(nums);
 }
 addc(1,2,3,4,7,8,0)
 addc("ram","arjun","sagar")