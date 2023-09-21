const numbers = [2,3,5,2,6,7,6,9,2];
console.log(numbers.lastIndexOf(2));//output 8
console.log(numbers.lastIndexOf(6))//output 6
console.log(numbers.lastIndexOf(100))//output -1 because number is not present in array
console.log(numbers.lastIndexOf(2,3))//iska matlab hai ki 2 ko 3rd index se seach karna start karo last me 
console.log(numbers.lastIndexOf(6,7))//it means 6 ko 7th index ke baad search karo 
console.log(numbers.lastIndexOf(7,4))//it means 7 ko search karo starting from 4th index to 0th index backwards and returns -1 kynki 
//4th index ke pahle present hi nahi hai 
console.log(numbers.lastIndexOf(2,-1))//output 8 kynki -1 se phir se last index se search karega 

//you can not use lastIndexof() method to search for NaN it will always return -1
console.log(numbers.lastIndexOf(NaN))

//example to find all occurences of an element 
//The following example uses lastIndexOf to find all the indices of an element in a given array, 
//using push to add them to another array as they are found.
const indices = [];
const arr = ['a','b','a','c','a','d'];
const element = 'a';
let idx = arr.lastIndexOf(element);
while(idx!= -1){
    indices.push(idx);
    idx = idx>0 ? arr.lastIndexOf(element,idx-1):-1;

}
console.log(indices);

const newarray = arr.sort((a,b)=>a-b)
console.log(newarray)





