class client {
    constructor(name,age){
        this.name = name
        this.age = age;
    }
    get getname(){
            if(usertype === "lowyer"){
                return this.name;
            }
            else{
                return "you are not authorized to access name";
            }
    }
}

const usertype = "lowyer"
//he reason why the variable userType is accessible inside the name method 
//in the Client class is because of the scope of the variable.
// This means that the variable has global scope2, and it can be accessed from anywhere in your code, 
//including inside the name method.

let person = new client("shriram",18);
 console.log(person.getname)

 //the set keyword is used to change values of 
 class student {
    constructor(name,section,course){
        this.name = name;
        this.class = section
        this.course = course;
    }
    get getname(){
        if(userType === "teacher"){
            return this.name;
        }
        else{
            return "you are not authorized to access the data";
        }
    }
    set getname(newname){
        if(userType === "teacher" && verifieddata === true){
            this.name = newname;
        }
        else{
        console.log("you are not authorized to change this name");
        }
    }
 }
 let userType = "teacher"
 let verifieddata = true;
 let child = new student("shriram tiwari","k","btech")
 console.log(child)
child.getname ="arjun tiwari"
 console.log(child)