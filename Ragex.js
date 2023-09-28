let pattern = 'pw'
let regexOne = new RegExp(pattern);
let flag = 'gi'//g->flobal i--> caise insensitive search kariye matlab PW and pw same hi hai 
let ragextwo = new RegExp(pattern,flag);

let regExthree = /pw/gi
const strtocheck = "my name is pwskill and PW skill and pw is goos pwskill";
const result = regExthree.test(strtocheck)//kya regex3 naam ka regular expresion hai mere strtocheck string me ?
console.log(result)
const anotherresult = strtocheck.match(regExthree)
console.log(anotherresult)
const onemoreresult = strtocheck.replace(regExthree,'p-w')
console.log(onemoreresult)

const webUrl = "https://pwskills.com/hitesh%210chaudhari"
const useableurl = webUrl.replace(/%\d\d0/,'-');
console.log(useableurl)

var x = 5;
var x = 15;

console.log(x);