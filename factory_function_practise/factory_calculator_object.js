const calculate = (initialvalue = 0) =>{
    let value = initialvalue;
    return {
        value,
        add(newval){
            value+=newval;
            return this;
        },
        subtract(newval){
            value-=newval;
            return this;
        },
        multiply(newval){
            value*=newval;
            return this;
        },
        divide(newval){
            this.value /= newval;
            return this;
        },
        getresult(){
            return  value;//do not use this here
    
        },
    };
}
 const newcalculator =  calculate();
 newcalculator.add(34).subtract(17).multiply(3).divide(2);
 console.log(newcalculator.getresult())

 /* 
 We are returning `this` in the methods of the factory function to enable **method chaining**.
  Method chaining is a technique where you can call multiple methods on the same object in a single statement,
   by linking them with dots¹. For example:

```js
calculator.add(10).subtract(5).multiply(2).divide(4);
```

This statement calls four methods on the `calculator` object, and each method returns the same object (`this`), 
so that the next method can be called on it. This makes the code more concise and readable, as opposed to writing
 four separate statements:

```js
calculator.add(10);
calculator.subtract(5);
calculator.multiply(2);
calculator.divide(4);
```

However, not all methods need to return `this`. Some methods may return a different value, 
such as the `getResult` method, which returns the final value of the calculation. In that case,
 you cannot chain any more methods after that, because the returned value is not an object with methods. For example:

```js
calculator.add(10).subtract(5).multiply(2).divide(4).getResult(); // 5
calculator.add(10).subtract(5).multiply(2).divide(4).getResult().add(1); // Error: 5.add is not a function
```
 */