# https://javascript.info/try-catch
# there are two types of errors
1. Syntax errors --> 
when the code syntax is not proper and the javascript interpreter cant understand it 
2. Runtime errors
 it occurs when the code is excuting 
 such as when trying to access an undefined variale or when a function is not found 
  
# only runtime errors which occur during the excution can be handled using exception handling in javascript 

syntax 
try {
    //code
}
catch{
    //code
}

# It works like this:

First, the code in try {...} is executed.
If there were no errors, then catch (err) is ignored: the execution reaches the end of try and goes on, skipping catch.
If an error occurs, then the try execution is stopped, and control flows to the beginning of catch (err). The err variable (we can use any name for it) will contain an error object with details about what happened.

# try cath works synchronously
If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it:

try {
  setTimeout(function() {
    noSuchVariable; // script will die here
  }, 1000);
} catch (err) {
  alert( "won't work" );
}
That’s because the function itself is executed later, when the engine has already left the try...catch construct.

To catch an exception inside a scheduled function, try...catch must be inside that function:

setTimeout(function() {
  try {
    noSuchVariable; // try...catch handles the error!
  } catch {
    alert( "error is caught here!" );
  }
}, 1000);

# Error object
When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to catch:

# “Throw” operator
The throw operator generates an error.

The syntax is:

throw <error object>
Technically, we can use anything as an error object. That may be even a primitive, like a number or a string, but it’s better to use objects, preferably with name and message properties (to stay somewhat compatible with built-in errors).

JavaScript has many built-in constructors for standard errors: Error, SyntaxError, ReferenceError, TypeError and others. We can use them to create error objects as well.

Their syntax is:

let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...
For built-in errors (not for any objects, just for errors), the name property is exactly the name of the constructor. And message is taken from the argument.