import React from "react";

// https://www.w3schools.com/cssref/pr_text_text-decoration.asp

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
