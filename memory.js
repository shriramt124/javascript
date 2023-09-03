/*
# primitive data type me -->  stack memory
# non-primitive data type me --> heap memory
 jab bhi stack memory use hoti hai to jo bhi variable aapne declare kiya hai uski ek copy milti hai
 --> agar koi memory heap ke andar define hoti hai to wahan se original value ka refrence milta hai

 */

 let myyoutubename = "shriram tiwari"
 let anothername = myyoutubename
 anothername = "chai aur code"
 console.log(anothername)
 console.log(myyoutubename);//bhale hi hamne anothername ko change kar diya jo ki myyoutube channel ko point kar raha hai 
 //jaise ki ye value stack me declare hui to original variable ki copy create hui isliye uske refrence ke change karne par original
 // value change nahi hui
 let user = {
    email : "shriramt.124@gmail.com",
    upiid:"user@ybl"

 }
 let usertwo = user;
 usertwo.email = "usr@gmail.com"
 console.log(user)//maine usertwo jo ki refrence hai original user ka uspe change kiya to original user pe change ho gaya
 //ye change isliye hui kyunki non primitive data type heap me jata hai  aur heap me origianal value ka refrence milta hai