import React from "react";
import "./style.css";

const image12 = require("../Images/bmw_2.jpg");
function Bugatti12Card() {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="Bugatti 12"
          src={image12}
        />
      </div>      
    </div>
  );
}

export default Bugatti12Card;
