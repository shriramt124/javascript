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