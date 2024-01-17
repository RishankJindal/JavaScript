//! Callbacks in Javascript

//? Callback ek function hota h jise kisi another function me as an argument pass krte h .
//? Mainly ye asynchronous programming me use hote h and kaam pura hone pe call hote h .

//* Example
function readFile(URL, Callback) {
  // Code to read file with url.
  let data = "Data to print or display to user.";
  Callback(data);
}

function printData(data) {
  console.log(data);
}

readFile("https://api/file1.txt", printData);

//? There is a concept of "Callback Hell" or "Pyramid of Doom" in which there is many nested callbacks.
//? These callback are hard to manage and read , so the concept of "Promise" introduce.

// ------------------------------------------------------------------------------------------------------

//! Promises

//* See example to understand the concept

let promise = new Promise(function (resolve, reject) {
  // Kuch asynchronous kaam yahan hota hai
  let success = true; // Assume successful operation

  if (success) {
    //? Resolve ko hum always successfully data milne pr hi call krenge
    resolve("Operation successful!"); // Data jo hum kaam ke success pe "then" me pass hota h
  } else {
    //? Reject ko hum always data na milne pr hi call krenge.
    reject("Operation failed!"); // Data jo hum kaam ke fail hone pr "catch" me pass hota h
  }
});

promise
  .then(function (result) {
    //? We can do anything with this result data.
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

// ------------------------------------------------------------------------------------------------------

//! Promise chaining

//* Example help to better understand.

function fetchData(url) {
  return new Promise(function (resolve, reject) {
    // Kuch asynchronous data fetch kaam
    // ...
    let data = "Fetched data from " + url;
    resolve(data);
  });
}

fetchData("/api/data")
  .then(function (result) {
    console.log(result);
    return fetchData("/api/anotherData");
  })
  //? Here below ".then" hold the response of the above ".then" function call.
  .then(function (anotherResult) {
    console.log(anotherResult);
  })
  .catch(function (error) {
    console.error(error);
  });
