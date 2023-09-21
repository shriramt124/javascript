// setTimeout(()=>{
// console.log("delayed 4 seconds");
// },4000);
// setTimeout(() => {
//     console.log("delayes one second")
// }, 1000);

function saytimedelay(){
    console.log("this is for delay")
}
const res = setTimeout(saytimedelay, 1000);

clearInterval(res)//it will not excute the above function

function greet(name,city,course){
    console.log(`hello ${name} from ${city} for course ${course}`);
}

const greeting = setTimeout(greet,5000,"shriram","indore","bteh")
clearInterval(greeting)

//set interval function
let count = 0;
function increment(){
count++;
console.log(`after increment count is : ${count}`)
}

const regularinterval = setInterval(increment, 1000);

 setTimeout(() => {
    clearInterval(regularinterval)
 }, 5000);//it will stop the excution of above function after 5 second