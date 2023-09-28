# closure
In other words, a closure gives you access to an outer function's scope from an inner function.
 In JavaScript, closures are created every time a function is created, at function creation time.

# Nested functions have access to variables declared in their outer scope.
 
# Getters and Setters
When writing code in a team, you want to limit who can change certain parts of the codebase to avoid bugs. It is advisable that in OOP, certain variables and properties should be hidden when necessary.

# When building apps that are keen on ensuring users' privacy, for example, legal issues management apps, you want to control who can access users' data like names, emails, and addresses. The get keyword helps you achieve this. You can limit who can access information:

class Client{
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get name() {
    if (userType === "Lawyer") {
      return this._name;
    } else {
      return "You are not authorized to view this information";
    }
  }
}

The code above declares a Client class with properties name and age and a getter that only returns the name if the user is a Lawyer. If you try to access the name as an Assistant, you'll get an error:

let userType = "Assistant";
const person = new Client("Benjamin Adeleye", 24);
console.log(person.name); // returns 'You are not authorized to view this information'

# Setters
The set keyword is the opposite of the get keyword. The get keyword is used to control who can access properties, while the set keyword controls who can change the value of properties.

 set name(newName) {
    if (userType === "Lawyer" && verifiedData === true) {
      this._name = newName;
    } else {
      console.log("You are not authorized to change this information");
    }
  }
The above code declares a set method that allows changes to the name only if the user is a Lawyer and documents have been verified:

let userType = "Lawyer";
let verifiedData = false;
let client = new Client("Benjamin Adeleye", 30);
client.name = "Adeleye Benjamin";
console.log(client.name); // returns 'You are not authorized to change this information'

# The set keyword
 is the opposite of the get keyword. The get keyword is used to control who can access properties, while the set keyword controls who can change the value of properties.

   set name(newName) {
    if (userType === "Lawyer" && verifiedData === true) {
      this._name = newName;
    } else {
      console.log("You are not authorized to change this information");
    }
  }
The above code declares a set method that allows changes to the name only if the user is a Lawyer and documents have been verified:

let userType = "Lawyer";
let verifiedData = false;
let client = new Client("Benjamin Adeleye", 30);
client.name = "Adeleye Benjamin";
console.log(client.name); // returns 'You are not authorized to change this information'

# //new ->{},{}=>prototype ,this.bind,return{}