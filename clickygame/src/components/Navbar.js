import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <span className="navbar-brand mb-0 h1">
        <h1>
          <b>Clicky Game</b>
        </h1></span>
        <span><h3>Click an image to begin</h3></span>
        <span><h3>Score: 0 | Top Score: 0 </h3></span>
    </nav>
  );
}

export default Navbar;

