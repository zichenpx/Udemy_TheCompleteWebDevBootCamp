import React, { useState } from "react";

/* In order to really understand how forms work we need to incorporate 
our knowledge about setting state and using state. */

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);

  /* we're more interested in is actually what the user is typed 
  rather than the fact that they have started typing. The other 
  thing to know is that when your input element triggers the 
  function that's stored in the on Change, it also passes over 
  an object. And that object corresponds to the event that 
  triggered this onChange. And we can log various things related 
  to that event. */
  function hendleChange(event) {
    // console.log("Changed.")
    // console.log(event.target);
    console.log(event.target.value);
    setName(event.target.value);
  }

  /* 
    Now there's just one thing to remember about forms. In HTML, 
  the elements themselves are responsible for handling their own state. 
  For example you might remember that there's a attribute called value. 
  And this corresponds to what is currently inside the input. Now 
  in HTML this value is normally handled by the input property and 
  it sets it to whatever is being typed in here. 
    But in React what you should really do is set the value to the 
  variable that comes   from the "event.target.value". 
    In our case that would of course be this thing name. This way 
  we have one single source of truth which is the state of name.
    So whenever we use it inside other components or when we have 
  it as the value of the inputs, they're all corresponding to 
  the same thing and they're all going to match up. And this 
  in React lingo is called a controlled component.
  https://reactjs.org/docs/forms.html#controlled-components
  */

  function handleMouseOver() {
    // console.log("over");
    setMouseOver(true);
  }

  function handleMouseOut() {
    // console.log("out");
    setMouseOver(false);
  }

  function handleClick(event) {
    // console.log("clicked");
    setHeading(name);

    event.preventDefault();
    /* So now we haven't actually improved anything, it still refreshes. 
    But we can now address it inside the handleClick function. So we 
    know that we get an event passed whenever one of these event handlers 
    get triggered. So we can catch that event inside this function and 
    right at the end of the function once we've done everything it is 
    that we want to do, we can get the event to call preventDefault. And 
    this is a method that basically prevents the default next behavior 
    of the event which in our case if it's coming from the form's onClick 
    here, that is going to be refreshing the page. */
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form action="" method="" onSubmit={handleClick}>
        <input
          onChange={hendleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          type="submit"
          // <!--onClick={#handleClick}-->
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
