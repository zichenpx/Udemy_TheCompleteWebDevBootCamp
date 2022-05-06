import React from "react";

//1. Extract the repeated parts of the App into a Entry component. (Create Entry Components.)
//2. Use props to make the Entry component render different data. (Create props to replace hardcoded data.)
function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {props.icon}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>
        {props.description}
      </dd>
    </div>
  );
}

export default Entry;

