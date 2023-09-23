try{
    console.log("hello");
    console.log(a);
}catch(err){
    console.log("errow is : "+ err);
}finally{
    console.log("finally")
}
console.log('end')

// try{
//     setTimeout(function(){
//         nosuchvariable;//script will dire here
//     },1000)
// }catch(err){
//     console.log('there is an error')
// }

//correct code of above 
/* setTimeout(function(){
    try{
        noSuchvariable;//errow
    }
    catch(error){
        console.log("this is an errow : " + error);
    }
},1000) */


let json = "{bad json}";//json is syntactically incorrect 
try{
    let user = JSON.parse(json);//thre is an errow
    console.log(user.name);//will not work because there is not user.name in out object 
}
catch(error){
    console.log("i apolizise for the mistake there is an error in data");
}
/* 
Here we use the catch block only to show the message, but we can do much more: send a new network request, 
suggest an alternative to the visitor
, send information about the error to a logging facility, … . All much better than just dying. */

//What if json is syntactically correct, but doesn’t have a required name property?
let newjson = '{"age": 30}';
/* try{
    let newuser = JSON.parse(newjson);
    console.log(newuser.name);
    /* Here JSON.parse runs normally, but the absence of name is actually an error for us.

To unify error handling, we’ll use the throw operator. */
/* }catch(error){
    console.log("error is : ");
} */
try{
    let newuser = JSON.parse(newjson)
    if(!newuser.name){
        throw new SyntaxError("no username in json")
    }
    console.log(newuser.name);
}catch(error){
    console.log("error is : "+ error);
}