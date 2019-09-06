import React from "react";
import "./style.css";

const image10 = require("../Images/lambo_2.jpg");
function Bugatti10Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="Bugatti 10"
          src={image10}
        />
      </div>      
    </div>
  );
}

export default Bugatti10Card;
