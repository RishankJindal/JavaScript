//! Closures in Javascript

//* Lexical Scoping

function outer() {
  let outerVariable = 10;
  function inner() {
    console.log(outerVariable);
  }
  inner();
}

outer();

/* Output : 10  , as lexical scope me inner function ko outer function(parent) ke variables, 
functions,etc. ka access hota h . */

//* CLosures

//? Hum closures waha use krte h jaha hame direct function ko execute na krna ho just uska reference dena ho , lein use execute bhi krna ho.

//* Example
function colorHandler(color) {
  div1 = document.getElementById("div1");
  return function () {
    div1.style.backgroundColor = `${color}`;
  };
}

function colorHandler2(color) {
  let div2 = document.getElementById("div2");
  div2.style.backgroundColor = `${color}`;
}

document.getElementById("btn1").onclick = colorHandler("orange");
document.getElementById("btn2").onclick = colorHandler("pink");
document.getElementById("btn3").onclick = colorHandler2("green");
document.getElementById("btn4").onclick = colorHandler2("yellow");
