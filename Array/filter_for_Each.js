let arr = [2,3,4];
arr.forEach(function(element,index,arr){
    console.log(index,element,arr);
})
arr.forEach((element,index,arr)=>{
    console.log(" arrow: "+ index,element,arr);
})

const heroes = ["nagaraj","doga","dhruva","shaktiman","ramraj"];
heroes.forEach((element)=>{
     console.log(element.toUpperCase());//sari values uppercase me mil jayegi 
})

arr.map(function(element,index,arr){
  console.log(element,index,arr);
})
heroes.map(function(element){
  console.log(element.toUpperCase());//map ka use karne ke baad bhi uppercase me ho jayegi
})
//filter 
console.log(heroes)
const heroesWithRaj = heroes.filter((h)=>{
   return h.endsWith("raj");//jo ye condition ko match karega usi ko return karega ye 
})
console.log(heroesWithRaj)

//shopping cart
const cartBill = [20,30,50];
const sumOfcartBill = cartBill.reduce((previous,current)=> previous+current,0);
console.log(sumOfcartBill)

const gamescore = [200,300,310,250,150];
console.log(typeof gamescore[1]);//type of return karta hai in string formate 
//check if all values are numbers
const gamescorecheck = gamescore.every((val)=> typeof val === 'number')
console.log(gamescorecheck)
//find score above 200
const aboveTwohundred = gamescore.find((score)=> score>200 )
console.log(aboveTwohundred)
//findindex
//some
//sort

const fruits = ["banana","apple","ram","orange","papa","pineapple"];
const newfruites = fruits.filter((element) =>(element.length > 5))
console.log(newfruites)

//we can call another function in filters callback funciton

function isbigenough(value){
  return value > 10
}
const num = [23,45,12,5,6,9,15,78];
const newnum = num.filter(isbigenough)
console.log(newnum)

//find all primie numbers in array using filter 
function findprime(number){
  for(let i = 2;number > i;i++){
    if(number%i === 0){
    return false;
  }
  }
  return num>1;
}
const primearray = [0,1 ,2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13];
console.log(primearray.filter(findprime));
// console.log(newprimearray)
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

//filtering invalid data from json is also done using filter property 
