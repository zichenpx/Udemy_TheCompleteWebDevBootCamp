import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;

/* So now inside our form component, we can receive those props and check for it 
in order to render something different inside our button. */
/*
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}
*/

/*
      {props.isRegistered === fasle && (
        <input type="password" placeholder="Confirm Password" />
      )}
*/

/*
      {props.isRegistered === fasle ? 
	  <input type="password" placeholder="Confirm Password" /> 
	  :null
      }
*/