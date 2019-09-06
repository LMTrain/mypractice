import React from "react";
import "./style.css";

const image11 = require("../Images/bmw_1.jpg");
function Bugatti11Card() {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="Bugatti 11"
          src={image11}
        />
      </div>      
    </div>
  );
}

export default Bugatti11Card;
