import React from "react";
import "./style.css";

// const image = this.props.image;

// require("../FriendCard/images/");
function FriendCard(props) {  
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image}/>
      </div>      
    </div>
  );
}

export default FriendCard;
