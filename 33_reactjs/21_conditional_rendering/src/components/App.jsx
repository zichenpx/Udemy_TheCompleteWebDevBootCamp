import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date(2020, 11, 1, 1).getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {/*Ternary Operator*/}
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {/*AND Operator*/}
      {/* {currentTime > 17 && <h1>Why are you still working?</h1>} */}
      {currentTime > 17 && currentTime < 8 ? (
        <h1>Why are you still working?</h1>
      ) : (
        <h1>Hard working.</h1>
      )}
    </div>
  );
}

export default App;
