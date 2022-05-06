import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClikck() {
    // console.log("Clicked");
    setHeadingText("Submitted!");
  }
  function handleMouseOver() {
    // console.log("Mouse Over");
    setMouseOver(true);
  }
  function handleMouseOut() {
    // console.log("Mouse Out");
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClikck}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
