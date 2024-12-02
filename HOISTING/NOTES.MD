## HOISTING
* hoisting is a javascript mechanism where variables and functions declarations are moved to the top of their scope before code execution

* the hoisting mechanism only moves the declaration. The assignments are left in place

### **1. Variable Hoisting**
- **`var` Variables:**
  When declared with `var`, the variable is hoisted to the top of its scope but is not initialized. Until the line of code where it is assigned a value is executed, it has a default value of `undefined`.

  ```javascript
  console.log(a); // undefined
  var a = 5;
  console.log(a); // 5
  ```

  What happens behind the scenes:
  ```javascript
  var a;         // Declaration is hoisted
  console.log(a); // undefined
  a = 5;         // Assignment remains in place
  console.log(a); // 5
  ```

- **`let` and `const` Variables:**
  Variables declared with `let` and `const` are also hoisted but are placed in a **temporal dead zone (TDZ)** from the start of the block until the line of code where they are declared. You cannot access them before their declaration.

  ```javascript
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 10;

  console.log(c); // ReferenceError: Cannot access 'c' before initialization
  const c = 15;
  ```

---

### **2. Function Hoisting**
- **Function Declarations:**
  Functions declared using the `function` keyword are fully hoisted, meaning you can call the function before it is defined in the code.

  ```javascript
  greet(); // "Hello, world!"
  function greet() {
    console.log("Hello, world!");
  }
  ```

  What happens behind the scenes:
  ```javascript
  function greet() {
    console.log("Hello, world!");
  }
  greet(); // "Hello, world!"
  ```

- **Function Expressions (using `var`):**
  Functions assigned to variables using `var` are hoisted, but the variable behaves the same way as other `var` declarations — initialized to `undefined` until the assignment is encountered.

  ```javascript
  console.log(greet); // undefined
  var greet = function () {
    console.log("Hi there!");
  };
  greet(); // "Hi there!"
  ```

- **Arrow Functions (using `let` or `const`):**
  Arrow functions declared with `let` or `const` are hoisted to the top but remain in the TDZ.

  ```javascript
  console.log(sayHello); // ReferenceError: Cannot access 'sayHello' before initialization
  const sayHello = () => console.log("Hello!");
  ```

---

 
 
 
 
 