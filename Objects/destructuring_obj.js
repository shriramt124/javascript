const course = {
    coursename:"full stack",
    price:"999",
     instructor:"shriram",
}

//console.log(course.instructor)

//dusra syntax 
const {instructor} = course //course ke andar se instructor ki value le li
//ham key ko modify bhi kar kar sakte hain 
const{instructor:master} = course
console.log(master) //ye bhi shriram hi print karega
console.log(instructor) //ye shriram printkarega

//json ek object hi hai bas usme keys and values bhi string hoti hai
//json means javascript object notation

/*  {
    "login":"shriram",
    "id" :"ramt.124",
    "isloggedin":"yes",
 } */

