//! Functions in Javascipt

//* Basic Function Definition and Calling

// Definition

// (a,b) -> Parameters
function sum(a, b) {
  return a + b;
}

// Calling
let value = sum(5, 6); // (5,6) -> Arguments
// console.log(value);

//? If we do not return any statement in function then it returns "undefined".

// ------------------------------------------------------------------------------------

//* Function Expression

const multiply = function (a, b) {
  //   console.log(a * b);
};

multiply(2, 8);

// ------------------------------------------------------------------------------------

//* Arrow Functions

const divide = (a, b) => a / b;
//? It has a feature to implicit return , without using "return" keyword.

value = divide(15, 3);
// console.log(value);

//? If we have single parameter then not necessary to use paranthesis "()".
//? If there is single statement in function body then no need to use curly braces "{}".

// ------------------------------------------------------------------------------------

//* Higher Order Functions

//? When we use function as a parameter or return it , then it is Higher order function.

function add(a, b) {
  return a + b;
}

// Definition of Higher Order Function
const HigherOrderFunction = (a, b, operation) => operation(a, b);

value = HigherOrderFunction(5, 8, sum); // Calling Higher Order Function

// console.log(value);

// ------------------------------------------------------------------------------------

//* Anonymous Functions

//? Function which do not have their names.

// Example 1
const result = function (a, b) {
  return a + b;
};

// Example 2
const arrowFunc = (a, b) => a * b;

// ------------------------------------------------------------------------------------

//* IIFE (Immediately Invoked Function Expression)

//? This immediately call function just after its definition.

// (() => {
//   let rishank = "name";
//   console.log(rishank);
// })();

// console.log(rishank); // Not defined error

//? We don't need to give function a name.

// ------------------------------------------------------------------------------------

//* Default Parameter Function

function greet(a, b, c = "defaultName") {
  console.log(`${a}\n${b}\n${c}`);
}

// greet("rishank");
// Output :
//  rishank
//   undefined
// defaultName

// ------------------------------------------------------------------------------------

//* Rest parameter Function

//? Jab bahut saare arguments lene ho to iska use krte h , ye ek array me elements deta h.

// function sum(...numbers) {
//   console.log(numbers);
// }

// sum(1, 2, 3, 4, 5);
//?Producing wrong output , I don't know why , I will get back to it later

function mult(...numbers) {
  console.log(numbers);
}

mult(1, 2, 3, 4, 5);

// ------------------------------------------------------------------------------------

//? CallBack Function , I will learn later according to topics roadmap.
