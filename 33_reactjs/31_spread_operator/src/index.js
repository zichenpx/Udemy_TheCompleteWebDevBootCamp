import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// // spread operator used in array
// const citrus = ["Lime", "Lemon", "Orange"];
// // const fruits = ["Apple", "Banana", "Coconut", ...citrus];
// const fruits = ["Apple", ...citrus, "Banana", "Coconut"];

// console.log(fruits);

// // spread operator used in object
// const fullName = {
//   fName: "James",
//   lName: "Bond"
// }

// const user = {
//   ...fullName,
//   id: 1,
//   username: "jamesbond007"
// };

// console.log(user);
