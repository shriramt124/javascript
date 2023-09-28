//creating classes
class job{
    constructor(jobrole,experience,name,age){
        this.jobrole = jobrole;
        this.experience = experience;
        this.name = name;
        this.age =  age;
    }
}
//the above creates job with some properties 
//now you can create differenct jobs with same properties using new keyword
let job1 = new job(
    "software developer",
    "5 years",
    "shriram tiwari",
    18
);
console.log(job1);
let job2 = new job(
    "frontend developer","10years","arjun tiwari",20
)
console.log(job2);
//Also, note that the initial values you give must be in order when creating
// a new Job object. For example, you create a job3 object like so:

//Class Methods
//When creating classes, you can add as many properties as you like. For example, 
//if you have a Vehicle class, aside from basic properties like type, color, brand, and year, 
//you probably also want to have methods like start, stop, pickUpPassengers, and dropOffPassengers.

//to add methods in the class you can add them after the constructor function
class Vehicle{
    constructor(type,color,brand,year){
        this.type = type;
        this.color = color;
        this.brand = brand;
        this.year = year;
    }
    start(){
        console.log("car started")
    }
    stop(){
        console.log("car stopeed")
    }
}
//in the above class the start and stop are methods that are added after constructor
let car = new Vehicle("car","red","enova",2023)
console.log(car)
let bike = new Vehicle("herohonda","blue","enova",2023)
console.log(bike);
//accesing methods using dot notation
bike.start();
bike.stop()//accessing methods

//Computed Properties
/* Programming largely depends on changing values, so similar to how you don't want to hardcode most of the values of the class 
properties,
 you might have some dynamic property names that vary based on some values. You can use computed properties to do that; 
 let's see how.

For example, when creating a job listing API, you might want developers to be able to change the applyThrough 
function name to another word, such as applyThroughLinkedIn or applyThroughIndeed, depending on their platform. 
To use computed properties, you need to wrap the property name in square brackets: */
let applythrough = "indeed"
class js{
    constructor(isfavourate,fullname,age){
        this.isfavourate = isfavourate
        this.fullname =fullname
        this.age = age;
    }
    [applythrough](){
        if(applythrough === "linkedin"){
           return  console.log("applyied through linkedin")
        }
        else if(applythrough === "indeed"){
            return console.log("applied through indeed")
        }
    }
}

let newjs = new js(true,"shriram",19)
console.log(newjs)
// newjs.linkedin()
 newjs.indeed()

 