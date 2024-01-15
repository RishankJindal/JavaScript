//! Objects in Javascript

//* Object declaration -----------------------------------------------------------------------------------

//? It can be initialised with constant declaration but have to make properties(key:value) one by one as discussed below.
const objectName = {};

//? It can be initialised later but not constant (Re-initialisation problem).
let objectName2 = new Object();

// console.log(`${typeof objectName}\n${typeof objectName2}`);

//* Object initialisation -------------------------------------------------------------------------------

//? We cannot initialise const object after declaration this way.
// objectName = {
//   name: "Rishank",
//   age: 21,
//   isStudent: true,
//   go: () => {
//     console.log("He is going to college!");
//   },
// };

// console.log(objectName);  //Give constant declaration error

//? Initialisation of "objectName" (No Problem in this)
objectName.name = "Rishank";
objectName.age = 21;

//? We can change value but key cannot.
objectName.name = "Rahul";

// console.log(objectName);

// -------------------------------------------------------------------------------------------------------

// First initialisation of objectName2
objectName2 = {
  name: "Rishank",
  age: 21,
  isStudent: true,
  go: () => {
    console.log("He is going to college!");
  },
};

// console.log(objectName2);

//? It will simply add key "have" in it.
objectName2.have = "yes";

// console.log(objectName2);

//! Re- initialisation problem , it destory previous structure , this is not allowed when use "const" keyword.
objectName2 = {
  hey: () => {
    console.log("Hey!");
  },
};

// console.log(objectName2);

// -------------------------------------------------------------------------------------------------------

//* Object Function as Methods

const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name + ".");
  },
};

// person.greet(); // Output: Hello, my name is John.

//? We can declare function in objects as it's methods.

// -------------------------------------------------------------------------------------------------------

//* Accessing Object values

// console.log(person.name);
// console.log(person["age"]);

// -------------------------------------------------------------------------------------------------------

//* Object Iteration (for-in loop)

//? It give the keys of object
for (let key in person) {
  //   console.log(key);
}

//? For-of loop do not work with objects.

// -------------------------------------------------------------------------------------------------------

//* Object.freeze() and Object.assign()

const myObject = {
  name: "John",
  age: 30,
};

// Freeze the object
Object.freeze(myObject);

// Trying to add a new property
myObject.city = "New York"; // This will not work in strict mode

// console.log(myObject);

//? No effect of delete on freezed object.
delete myObject.age;
// console.log(myObject);

// Unfreeze the object
const modifiedObject = Object.assign({}, myObject, { city: "New York" });

// console.log(modifiedObject);

//? Modified Object is not freeze.
modifiedObject.have = true;

// console.log(modifiedObject);

// Delete key from object
delete modifiedObject.have;
delete modifiedObject.city;

// console.log(modifiedObject);

// -------------------------------------------------------------------------------------------------------

//! Methods of Objects

const object01 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};
const object02 = {
  e: 5,
  f: 6,
  g: 7,
  h: 8,
};

//* Object.keys(obj)

let result = Object.keys(object01);
// console.log(result);
// Output is array of keys of object.

// -------------------------------------------------------------------------------------------------------

//* Object.values(obj)

result = Object.values(object02);
// console.log(result);
// Output is array of values of object.

// -------------------------------------------------------------------------------------------------------

//* Object.entries(obj)

result = Object.entries(object01);
// console.log(result);
// Output is array of arrays containing key and value.

// -------------------------------------------------------------------------------------------------------

//* Object.getOwnPropertyNames(obj)

result = Object.getOwnPropertyNames(object02);
// console.log(result);
// Output is array of properties(keys) whether it is enumerable or not.

// -------------------------------------------------------------------------------------------------------

//* Object.getOwnPropertyDescriptor(obj, prop)

result = Object.getOwnPropertyDescriptor(object01, "c");
// console.log("Before false :", result);
// Output : Before false : { value: 3, writable: true, enumerable: true, configurable: true }

//? It just temporarily false a writable property
result.writable = false;

result = Object.getOwnPropertyDescriptor(object01, "c");
// console.log("After false : ", result);
// Output : After false :  { value: 3, writable: true, enumerable: true, configurable: true }

object01.c = 10;
// console.log(object01);
// Output : { a: 1, b: 2, c: 10, d: 4 }

// -------------------------------------------------------------------------------------------------------

//* Object.defineProperty(obj,prop,descriptor)

//? Now make it permanent
Object.defineProperty(object01, "c", { writable: false });
result = Object.getOwnPropertyDescriptor(object01, "c");
// console.log(result);

//? Now checking it
object01.c = 12;
// console.log(object01);
// Output : { a: 1, b: 2, c: 10, d: 4 }

// -------------------------------------------------------------------------------------------------------

//* Object.defineProperties(obj,descriptors)

Object.defineProperties(object01, {
  a: { writable: false },
  c: { writable: true },
});

//? If we set enumerable to "false" then it will not take part in operation such as loops.

// console.log(Object.getOwnPropertyDescriptors(object01));

// Object.defineProperties(object01, {
//   c: { enumerable: false },
//   d: { enumerable: false },
// });

// console.log(Object.getOwnPropertyDescriptors(object01));

//? It will not give c and d , as we set it's enumerable property to false.
for (let keys in object01) {
  // console.log(keys);
}

// -------------------------------------------------------------------------------------------------------

//* Object.getOwnPropertyDescriptors(obj)

//? It is related with above one.
result = Object.getOwnPropertyDescriptors(object01);
// console.log(result);

// -------------------------------------------------------------------------------------------------------

//* Object.create(prototype,{propertiesObject})

const childObject01 = Object.create(object01, {
  i: { value: 13, writable: false },
  j: { enumerable: false },
});

//? Kuch nhi only empty object aara h , lekin agar chilObject01.a ya i likhte h to value aa jaati h .
// console.log(childObject01);

// -------------------------------------------------------------------------------------------------------

// * Object.freeze(obj)

//? Change only writable and configurable to false , enumerable keep true.
// Object.freeze(object01);

result = Object.getOwnPropertyDescriptors(object01);
// console.log(result);
// Output : writable and configurable : false , enumerable: true

// console.log(object01);

//? Try to change value but no effect
object01.a = 20;
// console.log(object01);

//? Making "configurable" false means it cannot be re-define or deleted using "delete" keyword.
// console.log(Object.getOwnPropertyDescriptors(object01));

// object01.b = 22;
// console.log(object01.b);
// console.log(delete object01.c);  //Output : false , means cannot delete

// -------------------------------------------------------------------------------------------------------

//* Object.seal(obj)

//? It makes "configurable" property : false
// Object.seal(object01);

result = Object.getOwnPropertyDescriptors(object01);
// console.log(result);

// console.log(object01);
// object01.e = 17;
// console.log(object01);
// delete object01.c;
// console.log(object01);

// -------------------------------------------------------------------------------------------------------

//* Object.isFrozen(obj) and Object.isSealed(obj)

//? Check for frozen?
// console.log(Object.isFrozen(object01));
// Object.freeze(object01);
// console.log(Object.isFrozen(object01));

//? Check for sealed?
// console.log(Object.isSealed(object01));
// Object.seal(object01);
// console.log(Object.isSealed(object01));

// -------------------------------------------------------------------------------------------------------

//* Object.isExtensible(obj)

// console.log(Object.getOwnPropertyDescriptors(object01));
// Object.seal(object01);

//? Check that we can add properties or not?
// console.log(Object.isExtensible(object01));

// object01.e = 17;
// console.log(object01);

// -------------------------------------------------------------------------------------------------------

//* Object.preventExtensions(obj)

// console.log(Object.getOwnPropertyDescriptors(object01));

//? Take no change in property descriptors
// Object.preventExtensions(object01);

// console.log(Object.getOwnPropertyDescriptors(object01));

//? Check by adding new property.
// console.log(object01);
// object01.e = 19;
// console.log(object01);

// -------------------------------------------------------------------------------------------------------

//* Object.getPrototypeOf(obj) and Object.setPrototypeOf(obj, prototype)

//? getPrototypeOf()

// let parentObject = { x: 10, y: 20 };

// let childObject = Object.create(parentObject, {
//   z: { value: 30, writable: true },
// })

// console.log(childObject);
// let prototypeOfChild = Object.getPrototypeOf(childObject);

// console.log(prototypeOfChild); // Output: { x: 10, y: 20 }

//? setPrototypeof()
let parentObject = { x: 10, y: 20 };

let childObject = { z: 30 };

// console.log(childObject.x); // Output: undefined

Object.setPrototypeOf(childObject, parentObject);

// console.log(childObject.x); // Output: 10

//? Have to learn more about it.

// -------------------------------------------------------------------------------------------------------

//* Object.hasOwnProperty(prop)

//? Directly accessed this method by objectName.
result = object01.hasOwnProperty("c");
// console.log(result);

// -------------------------------------------------------------------------------------------------------

//* Object.is(value1 , value2)

//? Ye strictly check (===) krta h between values except NaN , for NaN===NaN it give "true"

result = Object.is(4, 5);
// console.log(result);
// Output : false

result = Object.is(5, 5);
// console.log(result);
// Output : true

result = Object.is("hi", 5);
// console.log(result);
// Output : false

result = Object.is(NaN, NaN);
// console.log(result);
// Output : true

// -------------------------------------------------------------------------------------------------------

//* Object.fromEntries(iterable)

let entries = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];

//? Convert entries to object.
let obj = Object.fromEntries(entries);

// console.log(obj);
// Output: { a: 1, b: 2, c: 3 }

// -------------------------------------------------------------------------------------------------------

//* Object.getOwnPropertyDescriptors(obj)

//? Discussed above but again to add in points.
result = Object.getOwnPropertyDescriptors(object01);
// console.log(result);

// -------------------------------------------------------------------------------------------------------

//* valueOf

result = object01.valueOf();
// console.log(result);
// Output :  { a: 1, b: 2, c: 10, d: 4 }

// -------------------------------------------------------------------------------------------------------

//! More exploring part ⬇️

//* constructor

function Person(name) {
  this.name = name;
}

let john = new Person("John");
// console.log(john.constructor);
// Output: [Function: Person]

//* toString()

//? Will learn it later with prototype
// console.log(object01.toString());

//* Object.getOwnPropertySymbols(obj)

//? Pending
