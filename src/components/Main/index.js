import React from "react";
import Card from "../Card";
import "./style.css";

function Main(props) {
  function picClick(id) {
    props.handlePictureClick(id);
  }

  function shuffle(props) {
    props.shuffleArray();
  }
  return (
    <div>
      {props.synthImage.map(synthCard => (
        <Card
          image={synthCard.image}
          key={synthCard.id}
          pictureClick={() => picClick(synthCard.id)}
          shuffle={props.shuffleArray}
          clicked={synthCard.clicked}
        />
      ))}
    </div>
  );
}

export default Main;
