//creation of set
//set is an unordered collection
const seteg = new Set()
seteg.add(10)
seteg.add(20)
console.log(seteg)
console.log(seteg.size)
//set does not contain duplicate vlaues 
seteg.add(10)//adding duplicate values
console.log(seteg.size)//2
//size abhi bhi 2 hai kynki dupllicate value add hi nahi hui
 seteg.add(78)

 //sare elements ko clear karne ke liye
// seteg.clear()//sara set clear ho jayaga

console.log(seteg)
console.log(seteg.delete(10))
console.log(seteg)


const data = new Set();
data.add("john")
data.add({//set me objects bhi add kar sakte hain
    likes:"javascript",
    name:"arjun",
})
//console.log(data)//Set(2) { 'john', { likes: 'javascript', name: 'arjun' } }

//ab agar vlaues ko array ke form me lana hai 
console.log(data.entries())//array in form of key values pairs

data.add(40)
data.add(89)
data.add(99)
data.forEach((value1,value2)=> {
    console.log(`${value1} : ${value2*2}`)
});

console.log(data.has(20))//agar 20 present hoga data set me to true deeega nhi to false de dega 
console.log(data.keys())//sari keys de dega in form of iterable jisko iterate karke ham data ko manipulatekar sakte hain 

//array me se duplicate hatana hai to 
let arr = [10,20,3,40,40,20,10,50,10,20,3]
//is array ko set me convert karne ke liye 
const convertset = new Set(arr);
console.log(convertset)//sari duplicate values hat gayi 

//set ko vapas array me convert karne ke liye 
console.log(Array.from(convertset))


