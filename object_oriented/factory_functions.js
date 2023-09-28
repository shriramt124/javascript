// a factory funciton  is a function that creates a new object 
 function createPerson(firstname,lastname){
    return {
        firstname:firstname,
        lastname:lastname,
        getfullname(){
            return `${this.firstname} ${this.lastname}`;
        },
    };
 }
 let person1 = createPerson("shriram","tiwari");
 console.log(person1.getfullname())

 /* 
 By using the factory function, you create any number of the person objects without duplicating code.

When you create an object, the JavaScript engine allocates memory to it. If you create many person objects,
 the JavaScript engine needs lots of memory spaces to store these objects.

However, each person object has a copy of the same getFullName() method. It’s not efficient memory management.

To avoid duplicating the same getFullName() function in every object, you can remove the getFullName() 
method from the person object:
 */

 
var personactions = {
    getfullname(){
        return `${this.firstname} ${this.lastname}`
    }
}
function newPerson(firstname,lastname){
    let personanme = Object.create(personactions);
    personanme.firstname = firstname;
    personanme.lastname = lastname;
    return personanme;
}
console.log(newPerson("shriram","tiwari"))

