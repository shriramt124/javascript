let horse = {
    eat:true,
    walk(){
        console.log("yes it can walk")
    },
    
};
let rabbit = {
    jump:true,
    __proto__:horse,
}
//Property lookup and execution are two different things.

//The method rabbit.walk() is first found in the prototype, then executed with this=rabbit
rabbit.__proto__ = horse; // jo bhi property rabbit me nahi ho to use ek bar horse me delkh lena 
console.log(rabbit.jump);
console.log(rabbit.eat);//ye property rabbit me nhi thi to use horse se inherit kar liya using __proto__
rabbit.walk()//walk is taken from the prototype
//we can change direclty the prototype function because prototype  is only used for reading the function
rabbit.walk = function(){
    console.log("rabbit bounce bounce")
}
rabbit.walk()


//the prototype inherited object will modify only their own states
let animal = {
    walk(){
        if(!this.issleeping){
        console.log('yes i am walking')
        }
    },
    sleeping(){
         this.issleeping = true;
    }
};
let rabbitagain = {
    name:'white rabbit',
    __proto__:animal,
}
rabbitagain.sleeping();
console.log(rabbitagain.issleeping)
console.log(animal.issleeping)//modifying rabbit state does not affect animal 