let obj = {
    name :"shriram tiwari",
    age:18
}
let myobj = obj;//yahan shallow copy ho rahi hai 
//yeaha pe dono object ek hi refrence ko point kar rahe hain 
//kyunki non premitive data types ki memory heap me store hoti hai 
//isiliye dono same object ko point kar rahe hain 
//isis cheez ko aboid karne ke liye use me aaya hai spread operator
myobj.name="arjun";
console.log(obj);


let obj1 ={
    name:'priyanka',
    age:'89'
}
let obj2 = {...obj1};//yahan pe deep copy create hoti hai  using spread operator
obj.name="sagar"//yehan name change nahi hoga obj1 me kyunki deep copy create ho rahi hai 
console.log(obj1);

const myarr = [1,2,3,4]
const newarr = [...myarr]//deep copy create ho rahi hai 
 newarr[2] = 9;
 console.log(newarr);

 let newarr1 = [1,2,3,4];
 console.log(newarr1[7]);
 //output ==> undefined
 //undefined islliye aaya kynki newarr1 ka refrence to mila par 8th index ka refrence nahi mila to undefined print kar dega
 //agar array declare hi nahi hota to refrence error aa jata 


 function sum(a,b){
    //function ko write kare time variable dalte hai wo parameters hain
    //function call ke time jo values pass karte hain wo arguments hote hain
    console.log(a+b);
 }
 sum(10,20);

// let a = 5;let b = 8;
 function sum1(){
    console.log(a+b);//iski wajah se refrence error dega 
    //wo isliye kynki function ke scope ke andar a aur b defined nahi hai to wo paramenter me bhi nahi hai to 
    //ab parent scope me bhi a aur b nahi hai jo ki yahan pe global scope hai to use wahan bhi nahi mila iska matlav
    //a aur b ki values exist hi nahi karti to refrence error de diya 
 }
 sum1(10,20)
 //javascript me function hamesha kuchh na kuchh return karta hai 
 //agar hamne kuchh return nahi kiya to bydefault wo undefined return kar dega 

 //argument is like an array not an array
 