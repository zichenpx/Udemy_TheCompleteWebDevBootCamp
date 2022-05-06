import React, { useState } from "react";

// hook must be used inside function conponents

function App() {
  // let count = 0;
  // React.useState(); useState is from React.js
  const [count, setCount] = useState(0); // output is an array
  // console.log(state);
  // console.log(state[0]);

  // destructure make things like "state[0]" more understandable and debug
  // const rgb = [9, 132, 227];
  // const [red, green, blue] = [9, 132, 227];
  // console.log(blue);
  /* So given that we know that this useState function outputs a
  n array with a value and a function, then we can give each of 
  these a name instead of just calling it state. */

  function increase() {
    // count ++;
    // console.log(count);
    // console.log("+ got clicked.");
    setCount(count + 1);
  }

  function decrease() {
    // count --;
    // console.log(count);
    // console.log("- got clicked.");
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
