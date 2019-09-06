import React from "react";
import "./style.css";

const image8 = require("../Images/ferrari_3.jpg");
function Bugatti8Card() {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="Bugatti 8"
          src={image8}
        />
      </div>      
    </div>
  );
}

export default Bugatti8Card;
