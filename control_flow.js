//! Control Flow

//* If-Else Condition

let age = 18;
if (age >= 18) {
  //   console.log("Eligible for vote!");
} else {
  //   console.log("Not eligible for vote!");
}

// ------------------------------------------------------------------------------------

//* If - else if - else Condition

let time = 13;
if (time < 12) {
  //   console.log("Good morning!");
} else if (time >= 12 && time < 16) {
  //   console.log("Good afternoon!");
} else {
  //   console.log("Good evening!");
}

// ------------------------------------------------------------------------------------

//* Switch Statement

let dayNo = 3;
switch (dayNo) {
  case 1:
    // console.log("Monday!");
    break;
  case 2:
    // console.log("Tuesday!");
    break;
  case 3:
    // console.log("Wednesday");
    break;
  default:
    // console.log("Default!");
    break;
}

// ------------------------------------------------------------------------------------

//* For Loop

// for (let i = 0; i < 10; i++) {
//   console.log(`Iteration ${i + 1}\n`);
// }

// ------------------------------------------------------------------------------------

//* While Loop

// let i = 0;
// while (i < 5) {
//   console.log(`Iteration ${i + 1}\n`);
//   i++;
// }

// ------------------------------------------------------------------------------------

//* Do-While Loop

// let i = 0;
// do {
//   console.log(`Iteration ${i + 1}\n`);
//   i++;
// } while (i < 3);

// ------------------------------------------------------------------------------------

//* Break and Continue

for (let i = 1; i <= 5; i++) {
  if (i == 1) {
    console.log("1");
  } else if (i == 2) {
    continue;
    console.log("2");
  } else if (i == 3) {
    continue;
    console.log("3");
  } else if (i == 4) {
    break;
  } else {
    console.log("5");
  }
}

// ------------------------------------------------------------------------------------

//? Ternary operators is also a part of control flow , we have discussed it in operators.

//? Generators and Iterators , Labelled Statements , for-in loop , for-of loop , for-each loop , etc. I will learn it later.
