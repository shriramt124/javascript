
function myname(){//function defination
    console.log("shri ram tiwari");
}
myname() //function calling
//funciton is called with function name followed by parenthesis --------------->funname()

function addtwonumber(number1,number2){//number1 and  number 2 are parameters
    
    const res = number1+number2;
    console.log(res);

}
//addtwonumber(8,'4')//84
//addtwonumber('a',5)//a5
//here a and 5 are called arguments
//yani ki function call ke time jo values pass hoti hai usko arguments bolte hain

const res = addtwonumber(4,5);
//console.log(res)//function return nahi kar raha kuchh to yahan pe undefned aayega

function add(number1,number2){
    const res = number1 + number2;
    return res;
}
const ans = add(5,6);
console.log(ans)//ab ye 11 print hoga kyunki function ab kuchh return kar raha hai

function loginusermessage(username = "shriram"){//agar koi value pass nahi hui to shriram apne aap default print ho jayega
    if(username === undefined){
        console.log("bhai value to pass kar")
        return;
    }
    else
    return `${username} just logged in`
}
//const message = loginusermessage("shriram");
//man lo koi value hi nahi pass kari hoti to kya hota 
//const message = loginusermessage("arjjun") // undefined just logged in -->ye undefined aayega
//console.log(message)

//man lo hame pata hi nahi hai ki kitne argument aane wale hain

function calculatecartprice(num1){
return num1 
}
console.log(calculatecartprice(3,6,7))//yahan bhale hi maine 3 value pass hi hai wo ek hi parameter lega 3 aur 3 print kar dega



function pricf2(...num){//spread operator use kar lo wo drawback hatane ke liye 
return num;
}
console.log(pricf2(4,5,6))//spread operator use karne ke ye sari values array ki tarah ho jayegi aur array return hoga chahe jitni value dedo
//output -->[ 4, 5, 6 ]



function price3(val1,val2,...num){
    return num;
}
console.log(price3(1,2,4,5,6));//yahan pe 1->val1
                               //2->val2 
                               //baki bachi hui values chali gayi num me to num me ab 4,5,6 print hoga array ke form me






const user  = {
    username:"hitesh",
    price:199,
     
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleobject(user)//jaruri nahi hai object bana ke hi paas karo

//ham direct object ko hi pass kar sakte hain
handleobject({
    username:"palher",
    price:999,
})

const myarr = [200,400,600]
function retursecondvalue(getarr){
return getarr[2]
}
console.log(retursecondvalue(myarr))//function ke andar array bhi paas kar sakte hain

