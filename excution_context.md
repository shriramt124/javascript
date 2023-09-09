# excution context
Behind the scene, JavaScript does many things. in this tutorial, you will focus on execution contexts.

When the JavaScript engine executes the JavaScript code, it creates execution contexts.

Each execution context has two phases: the creation phase and the execution phase.
 
 # The creation phase
When the JavaScript engine executes a script for the first time, it creates the global execution context. During this phase, the JavaScript engine performs the following tasks:

Create the global object i.e., window in the web browser or global in Node.js.
Create the this object and bind it to the global object.
Setup a memory heap for storing variables and function references.
Store the function declarations in the memory heap and variables within the global execution context with the initial values as undefined.

# The execution phase
During the execution phase, the JavaScript engine executes the code line by line, assigns the values to variables, and executes the function calls.
For each function call, the JavaScript engine creates a new function execution context.

The function execution context is similar to the global execution context. But instead of creating the global object, the JavaScript engine creates the #arguments#  object that is a reference to all the parameters of the function:

# To keep track of all the execution contexts, including the global execution context and function execution contexts, the JavaScript engine uses the call stack, 

Also, the JavaScript engine uses a call stack to manage execution contexts:

1. Global execution context
2. function execution contexts

# The call stack works based on the LIFO principle i.e., last-in-first-out.

When you execute a script, the JavaScript engine creates a global execution context and pushes it on top of the call stack.
Whenever a function is called, the JavaScript engine creates a function execution context for the function, pushes it on top of the call stack, and starts executing the function.

If a function calls another function, the JavaScript engine creates a new function execution context for the function being called and pushes it on top of the call stack.

When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off.

The script will stop when the call stack is empty.


# asynchronous javascript
JavaScript is a single-threaded programming language. This means that the JavaScript engine has only one call stack. Therefore, it only can do one thing at a time.

When executing a script, the JavaScript engine executes code from top to bottom, line by line. In other words, it is synchronous.

Asynchronous means the JavaScript engine can execute other tasks while waiting for another task to be completed. For example, the JavaScript engine can:

1.Request for data from a remote server.
2.Display a spinner
3.When the data is available, display it on the webpage.

To do this, the JavaScript engine uses an event loop,