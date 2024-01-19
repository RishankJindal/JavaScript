//! DOCUMENT OBJECT MODEL IN JAVASCRIPT !!!

//* Project 01
// Selecting elements
const listDiv = document.getElementById("listDiv");
const contentInput = document.getElementById("contentInput");
const button = document.getElementById("btn");

// Set autofocus using JavaScript
contentInput.focus();

// Event on input field keydown
contentInput.addEventListener("keydown", function (event) {
  checkEnter(event);
});

// Event on button click
button.addEventListener("click", function (event) {
  checkEnter(event);
});

function checkEnter(event) {
  if (event.key === "Enter" || event.type === "click") {
    if (contentInput.value !== "") {
      let listItem = document.createElement("li");
      listItem.textContent = contentInput.value;
      listDiv.appendChild(listItem);
      contentInput.value = "";
      contentInput.focus();
    }
  }
}

// -----------------------------------------------------------------------------------------------

//* Project 02
// const colorButtons = document.getElementById("colorButtons");
const colorButtons2 = document.querySelector("#colorButtons");
const colorFrame = document.querySelector("#colorFrame");

// Add a single event listener to the container
colorButtons2.addEventListener("click", function (event) {
  // Check if the clicked element is a button
  if (event.target.tagName === "BUTTON") {
    // GET the specific button's ID <-
    // const buttonId = event.target.id;

    //GET the button content <-
    const buttonContent = event.target.textContent;

    colorFrame.style.backgroundColor = `${buttonContent}`;
  }
});

// -----------------------------------------------------------------------------------------------

//? Practice will be continue with new approaches with time.
