// import React from "react";
// import ReactDOM from "react-dom";

// const fName = "Angela";
// const lName = "Yu";
// const luckyNumber = 7;

// ReactDOM.render(
//   <div>
//     <h1>Hello, {fName + " " + lName}!</h1>
//     <h1>
//       Hello, {fName} {lName}!
//     </h1>
//     <p>Your lucky number is {luckyNumber}.</p>
//     <p>Your lucky number is {3 + 9}.</p>
//     <p>Your lucky number is {Math.floor(Math.random() * 10)}.</p>
//   </div>,
//   document.getElementById("root")
// );

//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
const name = "YZC";

const currentDate = new Date();
// console.log(currentDate);
let year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <h4>Created by {name}.</h4>
    <h4>Copyright {year}</h4>
  </div>,
  document.getElementById("root")
);
