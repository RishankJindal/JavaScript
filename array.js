//! Arrays in Javascript

//* Declaration & Initialization

//? Usinng "let" and "const" both.
const array01 = [1, 2, 3, 4, 5];
const array02 = new Array();
let array03 = [6, 7, 8, 9, 10];
let array04 = new Array();

//? Now time to experiment with const arrays :

//? This will give error : assignment to constant
// array01 = [1, 2, 3];
// console.log(array01);

//? Now checking type of arrays : Result is that these all are objects
// console.log(typeof array01);
// console.log(typeof array02);
// console.log(typeof array03);
// console.log(typeof array04);

//? Now with let arrays - experiment : - Result is that type of array has changed to "string" from "object".
// console.log(array04, typeof array04);
// array04 = "Hello";
// console.log(array04, typeof array04);

// -------------------------------------------------------------------------------------------------------

//* Accessing Elements in Arrays

//? Indexing "0" se shuru hoti h
// console.log(array01[1]);
// console.log(array03[0]);

// -------------------------------------------------------------------------------------------------------

//* Methods of arrays

//? Array[Symbol.iterator]()

let iterator = array01[Symbol.iterator]();
// console.log(iterator);

// for (let value of iterator) {
//   console.log(value);
// }

// -------------------------------------------------------------------------------------------------------

//? Array.at(index)

// console.log(array01.at(2));

// -------------------------------------------------------------------------------------------------------

//? Array1.concat(Array2) : return new Array

let newArr = array01.concat(array03);
// console.log(newArr);

// -------------------------------------------------------------------------------------------------------

//? Array.copyWithin(index,start,end)
// console.log(array01);
// console.log(array01.copyWithin(0, 2, 4));
// console.log(array01);

// -------------------------------------------------------------------------------------------------------

//? Array.entries()

iterator = array01.entries();
// console.log(iterator);
// console.log(iterator.next());
// console.log(iterator.next().value);

// -------------------------------------------------------------------------------------------------------

//? Array.every(function : return boolean) : it will return boolean value

function isLessThan100(value) {
  return value < 100;
}

//? This will always return true or false depending upon that all the test has passed or not.
// console.log(array01.every(isLessThan100));

// -------------------------------------------------------------------------------------------------------

//? Array.fill(value,start,end)

//? This will fill the same value in array from start to end.
// console.log(array01);
// array01.fill(0, 2, 4);
// console.log(array01);
// Output : [ 1, 2, 0, 0, 5 ]

//? If only start value given , then fill till the last index
// array01.fill(2, 1);
// console.log(array01);

//? If only values is given ,then fill all the index with value.
// array01.fill(5);
// console.log(array01);

// -------------------------------------------------------------------------------------------------------

//? Array.filter(function or condition)

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

// console.log(result);

// -------------------------------------------------------------------------------------------------------

//? Array.find(function)

//? Return first matching element , otherwise return "undefined".

let found = array01.find((value) => value > 4);
// console.log(found);

// -------------------------------------------------------------------------------------------------------

//? Array.findIndex(function)

//? It return the index of first statsfied value that returned , if not return -1.

found = array01.findIndex((value) => {
  return value > 5;
});

// console.log(found);

// -------------------------------------------------------------------------------------------------------

//? Array.findLast(function)

//? Iterator start from reverse order and return first element that satisfy , if not then return "undefined".

found = array01.findLast((value) => {
  return value > 5;
});

let found1 = array01.findLast((value) => {
  return value > 2;
});

// console.log(`found = ${found}\nfound1 = ${found1}`);

// -------------------------------------------------------------------------------------------------------

//? Array.findLastIndex(function)

//? Iterator start in reverse order and when the first condition satisfy , return it's "index" otherwise return -1.

found = array01.findLastIndex((value) => {
  return value < 5;
});

// console.log(found);

// -------------------------------------------------------------------------------------------------------

//? Array.flat(depth)

//? Nested array
newArr = [1, 2, [3, 4, [5, [10, 12, [18, 19, 20]]]], 7, 8];

//? Remove the first depth
// console.log(newArr.flat(1));

//? Remove the second depth
// console.log(newArr.flat(2));

//? Remove the infinity depth
// console.log(newArr.flat(Infinity));

// -------------------------------------------------------------------------------------------------------

//? Array.flatMap(function)

newArr = [1, 2, 3, [4, 5], [6, 7, [8, 9]]];

found = newArr.flatMap((num) => (num === 2 ? [2, 2] : 1));

// console.log(found);
// Output : [ 1, 2, 2, 1, 1, 1 ]

// -------------------------------------------------------------------------------------------------------

//? Array.forEach(function)

// array01.forEach((value) => console.log(value));

//? Similarily for keys(index here)
// for (let keys in array01) {
//   console.log(keys);
// }

//? Similarily for values
// for (let value of array01) {
//   console.log(value);
// }

// -------------------------------------------------------------------------------------------------------

//? Array.from(arrayLikeObject, function)

found = Array.from("Hello", (value) => value + "->");
found1 = Array.from(array03);

// console.log(found);
// console.log(found1);

// Output found : [ 'H->', 'e->', 'l->', 'l->', 'o->' ]
// Output found1 : [ 6, 7, 8, 9, 10 ]

// -------------------------------------------------------------------------------------------------------

//? Array.includes(searchElement , fromIndex)

// console.log(array01.includes(3, 2));
// console.log(array01.includes(3, 3));

// -------------------------------------------------------------------------------------------------------

//? Remaining methods later.
