// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1 className="heading" contentEditable="false" spellCheck="false">My Favourite Foods</h1>
//     <ul>
//       <li>Bacon</li>
//       <li>Jamon</li>
//       <li>Noodles</li>
//     </ul>
//     import React from "react";
// import ReactDOM from "react-dom";

// const img = "https://picsum.photos/200";

// ReactDOM.render(
//   <div>
//     <h1 className="heading" contentEditable="false" spellCheck="false">My Favourite Foods</h1>
//     <ul>
//       <li>Bacon</li>
//       <li>Jamon</li>
//       <li>Noodles</li>
//     </ul>
//     <h1 className="heading">My Favourite Foods</h1>
//     <img alt="random" src={img + "?grayscale"} />

//     <img
//       className="food-img"
//       alt="bacon"
//       src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"
//     />
//     <img
//       className="food-img"
//       alt="jamon"
//       src="https://images-na.ssl-images-amazon.com/images/I/71lNrnbMXsL._SL1200_.jpg"
//     />
//     <img
//       className="food-img"
//       alt="noodles"
//       src="https://www.errenskitchen.com/wp-content/uploads/2014/04/quick-and-easy-chinese-noodle-soup3-1.jpg"
//     />
//   </div>,
//   document.getElementById("root")
// );

//   </div>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "pink",
  fontSize: "20px",
  bordoer: "2px solid black"
};

customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);

