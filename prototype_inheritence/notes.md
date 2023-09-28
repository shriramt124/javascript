# When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”

The property [[Prototype]] is internal and hidden, but there are many ways to set it.
One of them is to use the special name __proto__, like this:

let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal


Now if we read a property from rabbit, and it’s missing, JavaScript will automatically take it from animal.

# writing doesnt use prototype

The prototype is only used for reading properties.

Write/delete operations work directly with the object.

let animal = {
  eats: true,
  walk() {
    /* this method won't be used by rabbit */
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.walk = function() {
  alert("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!

# The value of “this”
An interesting question may arise in the example above: what’s the value of this inside when we get a method inside a prototype

The answer is simple: this is not affected by prototypes at all.

No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.

If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.

# That is actually a super-important thing, because we may have a big object with many methods, and have objects that inherit from it. And when the inheriting objects run the inherited methods, they will modify only their own states, not the state of the big object.

# for…in loop
The for..in loop iterates over inherited properties too.