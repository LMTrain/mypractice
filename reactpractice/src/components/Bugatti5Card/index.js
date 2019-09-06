import React from "react";
import "./style.css";

const image5 = require("../Images/bugatti_5.jpg");
function Bugatti5Card() {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="Bugatti 5"
          src={image5}
        />
      </div>      
    </div>
  );
}

export default Bugatti5Card;
