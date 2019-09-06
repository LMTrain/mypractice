import React from "react";
import "./style.css";

const image2 = require("../Images/bugatti_2.jpg");
function Bugatti2Card() {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="Bugatti 2"
          src={image2}
        />
      </div>      
    </div>
  );
}

export default Bugatti2Card;
