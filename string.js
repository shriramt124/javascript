const name = "shriram"
const repocount = 50
//console.log(name + " " +repocount + " value") //this is an outdated method it is correct but outdated for modern days


console.log(`hello my name is ${name} and my repo count is ${repocount}`)//it is used in modern days
const gameName = new String('hitesh-hc-com');//using object
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())


console.log(gameName.charAt(3))//3rd index pe kaun sa character hai


console.log(gameName.indexOf('e'))//e kaun se index pe hai


const newstring = gameName.substring(0,4)//excluded last index it can not take negative values
console.log(newstring);
const anotherString = gameName.slice(-8,4)//last index is excluded
console.log(anotherString)


const newStringone = "  hitesh  "
console.log(newStringone)//it will also print empty space
console.log(newStringone.trim())//removes white spaces from both ends and returns new string without modifying original string

//------>To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd()<-------

const url = "https://shriram.com/ram%20tiwari"
console.log(url.replace('%20' , '-'))//%20 ko replace kar diya - se

console.log(url.includes('shriram'))//url me shriram include hai kahi na kahi and returns true or false
 //gamename = hitesh-hc-com

 console.log(gameName.split('-'))//it will make our string as array
 