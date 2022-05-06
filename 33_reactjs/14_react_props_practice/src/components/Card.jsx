import React from "react";

//2. Extract the contact card as a reusable Card component.

function Card(props) {
  return (
    <div>
      
      <div className="card info">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img
            className="circle-img"
            src={props.img}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p className="info">{props.phone}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
