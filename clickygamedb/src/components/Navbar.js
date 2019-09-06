import React from "react";


function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <span className="navbar-brand mb-0 h1">
        <a href="/public/index.html">
        <h1 id="restart-game">
          Clicky Game
        </h1> </a></span>
        
        <span id="click-message"></span>
        <span id="scores">Score    :    </span>
        <span id="top-scores"></span>       
        <span id="scores">|  Top Score  :</span>
        <span id="top-scoress"></span>
    </nav>
  );
}

export default Navbar;

