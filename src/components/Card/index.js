import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card float-left"
      onClick={() => props.pictureClick(props.id)}
    >
      <div className="img-container" onClick={props.shuffle}>
        <img src={props.image} key={props.id} alt="" clicked={props.clicked} />
      </div>
    </div>
  );
}

export default Card;
