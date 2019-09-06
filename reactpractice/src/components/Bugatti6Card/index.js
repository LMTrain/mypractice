import React from "react";
import "./style.css";

const image6 = require("../Images/ferrari_1.jpg");
function Bugatti6Card() {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="Bugatti 6"
          src={image6}
        />
      </div>      
    </div>
  );
}

export default Bugatti6Card;
