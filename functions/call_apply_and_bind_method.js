function printname(name){
    console.log(`hi ${name}`)
}
printname.city = "indore"
printname("ram")
console.log(printname.city)

//methods of functions object version
//call apply and bind all three methods are used to change the context of this

const user1 = {
    name:"john",
    greeting:function(){
        console.log(`hello ${this.name}`)
    }
}
//call method is use for function borrowing
const user2 = {
    name:"ram",
}
user1.greeting()
//greetings isme this user1 ko point kar raha hai 

//to ham this ka context chamge karne ke liya call() method ka use karenge
user1.greeting.call(user2);

function SayHello(city,age){
    console.log(`hello ${this.name} from ${this.city} of age ${this.age}`)//yahan pe name wo global object ko point kar raha hai 
} 
// SayHello.call(user2,'delhi',30)//isne this ka context change kar diya user2 ko 
// SayHello.call(user1,'indore',40)


SayHello.apply(user1,["ram",30])

const object = {
    branch:"computer science",
    section:"k",
    info:function(){
        console.log(`my branch is :${this.branch} of section :${this.section}`)
    }
}
 object.info();

 const objectone ={
    branch:"electrical",
    section:"M",
 }
// objectone.info()//info naam ka function objecone me nahi hai

 //object ke info function ko call karo objectone function ke liye
 object.info.call(objectone)//object one ne info function ko object se borrow le liya 
 

 function saycollege(colname,city){
    console.log(`my branch name is ${this.branch} and my section is :${this.section} of city ${city} and colname is :${colname}`)
 }
 const objecttwo ={
    branch:"electrical",
    section:"M",
 }
 //saycollege()//say college ka jo this hai wo global window ko point kar rah hai 
 //my college name is undefined and my city is :undefined

 //is function ko object one me use karna hai to 
 //saycollege ko call kar do objectone ke function ke liye 
 saycollege.call(objecttwo ,"svv","indore")//call function we can paas parameter also 
