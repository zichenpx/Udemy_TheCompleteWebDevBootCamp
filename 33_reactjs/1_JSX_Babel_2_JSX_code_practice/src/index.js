// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(What to show, Where to show it, callback function);
// ReactDOM.render(
//   <div>
//     <h1>Hello World!</h1>
//     <p>This is a paragraph.</p>
//   </div>, 
//   document.getElementById("root"));
  
//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//It should display a h1 heading.
//It should display an unordered list (bullet points).
ReactDOM.render(
  <div>
    <h1>My Favorite Fruits</h1>
    <ul>
      <li>Blueberry</li>
      <li>Banana</li>
      <li>Orange</li>
    </ul>
  </div>,
  document.getElementById("root")
);

//It should contain 3 list elements.