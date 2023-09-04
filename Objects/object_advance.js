//const tinderuser = new Object() -- >it is a constructor object it is a singleton object
let tinderuser = {}                   //it is a non singleton object
tinderuser.id = "123abc"
tinderuser.name = "ram"
console.log(tinderuser)   //it will give the output-->  { id: '123abc', name: 'ram' }

const regularuser = {
    email:"some@gmail.com",
    fullname:{//ye ek object hai
          userfullname:{//ye bhi object ke andar object hai
           firstname:"ram",
           lastname:"tiwari",
          }
    }
}
//console.log(regularuser.fullname)
//console.log(regularuser.fullname.userfullname?.lastname)

const obj1 = {
    1:"a",
    2:"b",
    3:"c",
}
const obj2 ={
    4:"d",
    5:"e",
    6:"f",
}
//to combine the objects
//const obj3 = {obj1,obj2}//ye dono objects ko hi value man lega
//output--------------> obj1: { '1': 'a', '2': 'b', '3': 'c' },
  //                    obj2: { '4': 'd', '5': 'e', '6': 'f' }

  //-->par hame inhe ek objects banana hai

  //The target object to copy to.


//Copy the values of all of the enumerable own properties from one or more source objects to a target object.
// Returns the target object.
  //const obj3 =  Object.assign(obj1,obj2) //obj2 ki value combine ho gayi obj1 me aur assign ho gayi obj3 me

  
 // const obj3 = Object.assign({},obj2,obj1)//ek empty object lena jaruri hai guarantee rahegi ki empty me sare objects ki value empty object me copy ho jayegi
  //aur obj3 me assign ho jayegi
  const obj3 = {...obj1,...obj2};
console.log(obj3)

const users = [
  {
    id :1,
    email:"h@gmail.com",
  },
  {
    id :1,
    email:"h@gmail.com",
  },
  {
    id :1,
    email:"h@gmail.com",
  },
]

console.log(users[1].email)

console.log(tinderuser)

console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))//har key value pairs ko array bana diya jata hai 
//[ [ 'id', '123abc' ], [ 'name', 'ram' ] ]

 

