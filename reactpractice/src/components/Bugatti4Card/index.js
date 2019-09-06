import React from "react";
import "./style.css";

const image4 = require("../Images/bugatti_4.jpg");
function Bugatti4Card() {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="Bugatti 4"
          src={image4}
        />
      </div>      
    </div>
  );
}

export default Bugatti4Card;
