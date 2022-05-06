import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;
    // -↓
    const { value, name } = event.target;
    console.log(event.target); // ↓
    // <input name="fName" placeholder="First Name" autocomplete="off" value="a"></input>
    // <input name="lName" placeholder="Last Name" autocomplete="off" value="v"></input>

    // console.log(newValue);
    // console.log(inputName);

    /*
      But in reality we could probably write this code in a much simpler way. 
      To start with instead of using our constant newValue equals 
      event.target.value, const inputName equals event.target.name, we could 
      in fact use our object destructuring. So we could create a new constant 
      open up a set of curly braces to create a new object literal where 
      we tap into the value property and the name property and we set it to 
      equal event.target.-> "const [value, name] = event.target;", And this will 
      replace both of these things 
      ("const newValue = event.target.value;
        const inputName = event.target.name;")
      and we now get to use name, name, value and value.
      -> inputName === "fName" --> name === "fName"
      -> inputName === "lName" --> name === "fName"
      -> fName: newValue, --> fName: Value
      -> lName: newValue --> lName: Value
    */

    /* Warning: This synthetic event is resued for performance resasons. If you're seeing this, 
    you're accessing the property `target` on a released/nullified synthetic event. This is set
    to null. If you must keep the original synthetic event around, use event.persist(). See 
    https://fb.me/react-event-pooling for more information. */
    /* ↓
    Warning: make sure that in the future when you're creating your own apps or in any of the 
    exercises or challenges don't try to access the event or anything related to the event inside 
    a stateful setter(-> setFullName()). So when we setFullName() we're trying to update 
    the state of this constant fullName. And inside here (-> setFullName()) if you try to access 
    event, let's say instead of getting the name we actually try to get event.target.name even 
    though this seems like valid code, what's actually going to happen is you're going to get 
    an error inside the console and it's going to warn you about synthetic events being reused.
    https://reactjs.org/docs/events.html
    But essentially what it boils down to is the fact that when these inputs are passing an event 
    (-> onChange={handleChange}) through these event listeners, the event that you actually get 
    hold of is not a real event. It's a synthetic event that React has created. And you must 
    never try to access those events when you're trying to use one of these stateful setters. 
    So inside here, you should not ever use event. You should always have it outside somewhere 
    over here for example and I recommend just getting used to using destructuring like this 
    when you're trying to access the new value or the name of the inputs.
    */

    setFullName((prevValue) => {
      // console.log(prevValue);
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello, {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={fullName.fName} // comment it out when testing, so we turn them into uncontrolled components
          autoComplete="off"
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lName}
          autoComplete="off"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
