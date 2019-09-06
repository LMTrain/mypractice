import React from "react";
import "./style.css";

function CarCard(props) {
  return (
    <div className="card">
      <div className="img-container" onClick={() => props.handleShuffleClick()}>
        <img alt={props.name} src={props.image} />
      </div>
      
      <span onClick={() => props.handleRemoveClick()} className="remove">
        
      </span>
    </div>
  );
}

export default CarCard;
