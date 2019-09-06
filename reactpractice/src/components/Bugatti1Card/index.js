import React from "react";
import "./style.css";


const image1 = require("../Images/bugatti_1.jpg");
class Bugatti1Card extends React.Component {
    state = {
      name: "bugatti_1"
    }; 
 

  render() {  
    return (  
      <div className="card">
        <div className="img-container">
         
          <img
            alt="Bugatti 1"
            src={image1}          
            
          />
        </div>      
      </div>
    );
    
  }
 


}

export default Bugatti1Card;
