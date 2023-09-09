# call method and apply method
  there is a car object without the displayDetails function, which is located in the global context.

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota"
}

function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}

displayDetails.apply(car, ["Vivian"]); // Vivian, this is your car: GA12345 Toyota

displayDetails.call(car, "Vivian"); // Vivian, this is your car: GA12345 Toyota

Note that when using the apply() function the parameter must be placed in an array. Call() accepts both an array of parameters and a parameter itself. Both are great tools for borrowing functions in JavaScript.

# bind method
The bind() method creates a new function where “this” refers to the parameter in the parenthesis in the above case “car”. This way the bind() method enables calling a function with a specified “this” value.

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}
The above will work perfectly fine as long as we use it this way:

car.displayDetails(); // GA12345 Toyota
 
 # But what if we want to borrow a method?

var myCarDetails =  car.displayDetails;
myCarDetails();

1. Well, this won’t work as the “this” will be now assigned to the global context which doesn’t have neither the registrationNumber nor the brand property.

# The bind() Method
For such cases we can use the ECMAScript 5 bind() method of the Function.prototype property. This means bind() can be used by every single function.

var myCarDetails = car.displayDetails.bind(car); 
myCarDetails(); // GA12345 Toyota
The bind() method creates a new function where “this” refers to the parameter in the parenthesis in the above case “car”. This way the bind() method enables calling a function with a specified “this” value.

What if we would like to pass a parameter to the displayDetails function? We can use the bind method again. The following argument of the bind() method will provide an argument to the function bind() is called on.

Let me rewrite the car object:

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(ownerName){
        console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
    }
}
Example of passing arguments with bind():

var myCarDetails = car.displayDetails.bind(car, "shriram"); // Vivian, this is your car: GA12345 Toyota

