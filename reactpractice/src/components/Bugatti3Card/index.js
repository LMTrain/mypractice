import React from "react";
import "./style.css";

const image3 = require("../Images/bugatti_3.jpg");
function Bugatti3Card() {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="Bugatti 3"
          src={image3}
        />
      </div>      
    </div>
  );
}

export default Bugatti3Card;
