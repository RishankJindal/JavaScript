//! Scope in javascript

//* Global Scope

//? We can access any variable that is out of every scope and called Global Variable.
let user = "rishank";

(function displayName() {
  console.log(`Name is ${user}`);
})();

//* Local Scope

//? Variable that is inside any scope called Local Variable of that scope and access within the scope.

(function sayHello() {
  let message = "Hello!";
  console.log(message);
})();

console.log(message); // Giving referenceError : message is not defined due to it's local scope.
