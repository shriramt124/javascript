//dates
/*
let mydate = new Date()
console.log(mydate.toString()) //Sun Sep 03 2023 15:48:31 GMT+0530 (India Standard Time)
console.log(mydate.toLocaleString())//3/9/2023, 3:50:20 pm
console.log(mydate.toLocaleDateString())//3/9/2023
console.log(mydate.toJSON())//2023-09-03T10:21:28.084Z
console.log(mydate.toDateString())//Sun Sep 03 2023
*/

//console.log(typeof mydate) //-> it is an object


//let mycreateddate = new Date(2023,0,23) //Date(year,month,date)//yahan month 0 se start hote hain
//console.log(mycreateddate)//2023-01-22T18:30:00.000Z

//The Date() constructor can be called with two or more arguments, in which case they 
//are interpreted as the year, month, day, hour, minute, second, and millisecond, respectively,
let mycreateddate = new Date(2023,0,23,5,3);
console.log(mycreateddate.toString())

let mydate = new Date("01-14-2023")
console.log(mydate.toLocaleString())

let myTimestamp = Date.now()
console.log(myTimestamp) //1693737041084 gives time in mili seconds
console.log(mycreateddate.getTime()) // 

console.log(Math.floor(Date.now()/1000))//to convert it to second we will divide it by 1000 and to avoid decimal values we will use Math.florr()

 let newDate = new Date()
 console.log(newDate)
 console.log(newDate.getMonth()+1)
 console.log(newDate.getDay())


 newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:'',
 })

 //You can interact with the timestamp value directly using the getTime() and setTime() methods.
 //All static methods (Date.now(), Date.parse(), and Date.UTC()) return timestamps instead of Date objects.
//The Date() constructor can be called with a timestamp as the only argument.
