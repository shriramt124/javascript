//creation of map 
let map = new Map()
console.log(map)
map.set('1','stringValue')
map.set(1,'numberValue')
map.set(true,'booleanValue')
console.log(map.get(1))
console.log(map.get('1'))
//map me string value and number values dono alag alag hain
//map me ham object ko bhi keys bana sakte hain 
let user = {name:'shriram'}
let visitmap = new Map()
visitmap.set(user,'100')
console.log(visitmap)//Map(1) { { name: 'shriram' } => '100' }
//yahan pe key ho gaya object and value ho gayi number
let newmap = new Map()
//chaining kar sakte hain map me 
newmap.set('1,stringvalue').set(1,'numvalues').set(true,'booleanvlaues')
console.log(newmap)

//map me bhi iterate kar sakte hain 
let itemsmap = new Map(
    [
        ['tomatoes',100],
        ['onions',120],
        ['potato',300],
    ]
)
console.log(itemsmap)//Map(3) { 'tomatoes' => 100, 'onions' => 120, 'potato' => 300 }

console.log(itemsmap.keys())//ye mujhe arrya of keys return kar dega 
//[Map Iterator] { 'tomatoes', 'onions', 'potato' } 
//ye ek map iterator reutrn kar raha hai 
for(let items of itemsmap.keys()){//map iterator pe iterate kar diya 
    console.log(items)
}
//hamne pahle map me nikala keys in form of array aur phir user iterate kar diya 
itemsmap.forEach((value,key)=>{
    console.log(`key is ${key} value is ${value}`)
})

//man lo hame map banana hai from object 
let useragain = {
name:"ram",
age:20,
}
//let mapfromobject = new Map(user)
//console.log(mapfromobject)//error aayega ki objects are not iterable 
console.log(Object.entries(useragain))//ye key value pairs 
let mapfromobject = new Map(Object.entries(useragain))
console.log(mapfromobject)//ab ye object se map ban gaya 
//objecy se map banane ke liye pahle key value pairs ka array nikal lo using Object.entries(useragain)
//aur phir map bana lo 

let itemsmap1 = new Map(
    [
        ['tomatoes',100],
        ['onions',120],
        ['potato',300],
    ]
)
console.log(itemsmap1)
//let obj = Object.fromEntries()//ye use karne ke liye hame array like structure or map iterator chahiye rahega 
console.log(itemsmap1.entries())//map iterator aa jayega 
let obj = Object.fromEntries(itemsmap1.entries())
console.log(obj)//ab ye object ban gaya 
m