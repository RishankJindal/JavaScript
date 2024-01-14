//! Learning about operators

//* Arithematic operators (+,-,*,/,%)

let sum = 3 + 5;
// console.log(sum);

// -----------------------------------------------------------------------------------------

//! Notice : So remeber to take care of data types while performing operations.

//? It make 3 as string and concatenate in 8
let sum2 = 3 + "8";
// console.log(sum2); //Output : 38

//? Now this time 8 make as string and concatenated happed and ouut is same
//? It means String dominate over Number
let sum3 = "3" + 8;
// console.log(sum3);  // Output : 38

// -----------------------------------------------------------------------------------------

let difference = 10 - 5;
// console.log(difference);  // Output : 5

let product = 4 * 6;
// console.log(product);  // Output: 24

let division = 15 / 3;
// console.log(quotient);  // Output: 5

let division2 = 17 / 2;
// console.log(quotient2);  // Output : 8.5

let remainder = 17 % 5;
// console.log(remainder);  // Output: 2

// -----------------------------------------------------------------------------------------

//* Assignment Operator (=,+=)

let agee = 3; // "=" is assignment operator

agee += 2; // "+=" is addition assignment operator

// -----------------------------------------------------------------------------------------

//* Comparison Operator (==,===,!=,!==,<,>,<=,>=)

let isEqual = 10 == "10"; // Output: true (Loose Equality)

let isStrictEqual = 10 === "10"; // Output: false (Strict Equality)

let isNotEqual = 5 != "5"; // Output: false (Loose Inequality)

let isStrictNotEqual = 5 !== "5"; // Output: true (Strict Inequality)

let greaterThan = 8 > 5; // Output: true
let lessThanEqual = 5 <= 5; // Output: true

//? It will give true even if we make 5 as string
// console.log(greaterThan);

// -----------------------------------------------------------------------------------------

//* Logical Operator (&&,||,!)

let result_AND = true && false; // Output : false

let result_OR = true || false; // Output: true

let result_NOT = !true; // Output: false

// -----------------------------------------------------------------------------------------

//* Increment/Decrement Operator (++ , --)

let salary = 2000;
salary++; // Output : 2001

// console.log(salary);

salary--; // Output : 2000

// console.log(salary);

// -----------------------------------------------------------------------------------------

//* Ternary Operator (? :)

let Age = 20;
let isAdult = Age >= 18 ? "Yes" : "No";

// console.log(isAdult);  // Output : Yes

// -----------------------------------------------------------------------------------------

//* TypeOf Operator (typof)

let variableType = typeof "Hello";

// console.log(variableType);  // Output : string

// -----------------------------------------------------------------------------------------

//! Advance Operators or concepts

//* Destructuring Assignment ([a,b,c])

// Array Destructuring
let numbers = [1, 2, 3];
let [a, b, c] = numbers;

// console.log(a, b,c); // Output : a=1 and b=2
//? Here there will create variables like a , b and c to store values in sequence for array.
//? Here spread operator that we'll discuss next to this can be used which return values in array

// Object Destructuring
let person = { userName: "John", age: 30, isStudent: false };
let { userName, he } = person;
console.log(userName, he);

//?We cannot use spread operator in Object , it is giving error.
//? Also we have to ensure that variable should match the exact name as key to get value other return undefined.

// -----------------------------------------------------------------------------------------

//* Spread Operator (...)

// Array Spread
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // arr2 = [1, 2, 3, 4, 5]

// Object Spread
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; // obj2 = { a: 1, b: 2, c: 3 }

//? We use spread operator here to concatenate two arrays and objects.

// -----------------------------------------------------------------------------------------

//* Nullish Coalescing Operator (??)

let value = null;
let result = value ?? "Default Value"; // result = "Default Value"

//? Help to hadle null or undefined values.

// -----------------------------------------------------------------------------------------

//* Optional Chaining Operator (? .)

// Without Optional Chaining
let street1;
if (user && user.address && user.address.street1) {
  street1 = user.address.street1;
} else {
  street1 = "Unknown";
}

// With Optional Chaining
let street2 = user?.address?.street2 ?? "Unknown";

//? When we have to deal with Object , take care about it.

// -----------------------------------------------------------------------------------------
