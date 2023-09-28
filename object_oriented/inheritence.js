class product{
    constructor(name,price,description,image){
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }
    formateprice(){
        return this.price;
    }
    addtoCart(){
        console.log("cart is added")
    }
}

//inheritence 
//to inherit properties of another class we need extend keyword
class books{
    constructor(name,price,description,image,author,title){
        super(name,price,description,image);
        this.author = author;
        this.title = title;
    }
}
/* 
The extends Keyword
The extends keyword is self-explanatory; it is used to extend the capability of another class.
*/

/* 
The super Keyword
The super keyword eliminates the multiple declarations you would otherwise need to repeat for each new child class. For example,
 the super function called in the above code replaced the following code:

    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
*/
//new ->{},{}=>prototype ,this.bind,return{}