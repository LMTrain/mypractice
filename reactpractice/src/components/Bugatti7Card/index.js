import React from "react";
import "./style.css";

const image7 = require("../Images/ferrari_2.jpg");
function Bugatti7Card() {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="Bugatti 7"
          src={image7}
        />
      </div>      
    </div>
  );
}

export default Bugatti7Card;
