function person(name,age){
    this.name = name;
    let _age = age;//private
    this.greet = function(){
        console.log(`hello ,my name is ${this.name} and i am ${age} years old`)
    }
    this.getAge = function(){
        return _age;
    };
    this.setAge = function(newage){
        if(newage>0){
            _age = newage;
        }
        else{
            console.log('invalid age')
        }
    }
}
//hota kya hai ki jo private variables hote hain uski this ke saath binding nahi hoti 
//hai that is why they can not be accessible using this 
let p = new person("shriram",45)
p.greet()
let p1 = new person("shriram",10)
p1.greet()
console.log(p1.getAge())
p1.setAge(50)
console.log(p1.getAge())

//encapsulation using closures

/* 
The this keyword is not needed here because the inner functions do not need to refer to the returned object or any other object.
 They only need to access the private variables in their closure scope. The this keyword would only be useful if the BankAccount
 function was used as a constructor, and the private variables were defined as properties of the this object.
*/
function BankAccountNumber(accountnum,accountholder,balance){
    let _accountnum = accountnum;
    let _accountholder = accountholder
    let _balance = balance

    function showAccountDetails(){
        console.log(`account number is : ${_accountnum}`)
        console.log(`holder name is : ${_accountholder}`)
        console.log(`balance is : ${_balance}`)
    }
    function deposite(amount){
        _balance+=amount;
        showAccountDetails();
    }
    function withdrow(amount){
        if(_balance >=amount){
            _balance-=amount;
            showAccountDetails();
        }
        else{
            console.log("insufficient balance")
        }
    }
    return {
        deposite:deposite,
        withdrow :withdrow,

    }
}
 let newholder =BankAccountNumber(123478 ,"shriram tiwari",100);
 newholder.deposite(5000)
newholder.withdrow(200) 

//encapsulation using classes 
class account{
    constructor(accountnumber,holdername,balance){
        this._accountnumber = accountnumber
        this._holdername = holdername
        this._balance = balance;
    }
    showaccountdetails(){
        console.log(`account number is : ${this._accountnumber}`)
        console.log(`holder name is : ${this._holdername}`)
        console.log(`balance is : ${this._balance}`)
    }

    deposite(amount){
        this._balance+=amount;
        this.showaccountdetails();
    }
    withdraw(amount){
        if(this._balance >= amount){
            this._balance-=amount;
            this.showaccountdetails();
        }
        else{
            console.log('insufficient balance')
        }
    }
}
let myaccount = new account(1928374,"shrirram tiwari",100);
myaccount.deposite(500);
myaccount.withdraw(400)
myaccount.withdraw(200)
//the above function is also is an example of abstraction in which we are not giving access to showaccountdetails 
//that is an example of abstraction also 