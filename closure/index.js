 function init(){
    let name ="Rahul";
    function showname(){
       console.log(name);//variable declared outside is accesible inside 
    }
    showname();//function call
 }
 init();

 function outer(){
    let username = "numan";
    console.log("outer " + username);
    function inner(){
        let secret = "password";
        console.log("inner "+ username);
    }
    function innerTwo(){
        console.log("innerTwo " + username)

        
        console.log("innerTwo "+ secret);
    }
    inner();
    innerTwo();
 }
 outer();
 


