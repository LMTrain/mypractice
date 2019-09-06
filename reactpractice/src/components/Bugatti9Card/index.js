import React from "react";
import "./style.css";

const image9 = require("../Images/lambo_1.jpg");
function Bugatti9Card() {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="Bugatti 9"
          src={image9}
        />
      </div>      
    </div>
  );
}

export default Bugatti9Card;
