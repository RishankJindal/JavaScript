//! We mainly use two types of keywords to make variables -> "let and const"

//! var -> It was used to make variables but due to some issues of scoping and all , it is deprecated by the developers.

// -----------------------------------------------------------------------------------------------

//* Playing with let keyword

let userName = "Rishank";
let age = 25;
let Age = 23.8;
let isLoggedIn = false;
let height = 5.9;
let salary = 235000;

// console.log(`userName = ${userName}`);

//? Is variables case-sensitive ? Yes
// console.log(`age = ${age}\nAge = ${Age}`);

// -----------------------------------------------------------------------------------------------

//! Now experiment part with "let"

//? Can we allocate value after it's declaration? Yes
let jobTitle;
jobTitle = "Engineer";
// console.log(`jobTitle = ${jobTitle}`);

//? Check that re-assign in same data-type allowed or not? Allowed
jobTitle = "Designer";
// console.log(`jobtitle = ${jobTitle}`);

//? Check that re-assign in different data-type is allowed or not? Allowed
jobTitle = 25;
// console.log(`jobTitle = ${jobTitle}`);

// -----------------------------------------------------------------------------------------------

//* Playing with const keyword

const password = "rishank123";
// console.log(password);

//! Now experiment part with "const"

//? Can we allocate values after declaration? No
// const userPass;

//? Can we re-assign value in same data-type? No
const userPass = "rishank";

//It is not giving error but it is not allowed when we run.
// userPass = "hello";

// console.log(`userPass = ${userPass}`);
