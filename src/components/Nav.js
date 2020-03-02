import React from "react";

import "./Nav.css";
const Nav = props => {
  return (
    <div className="nav-links">
      <div className="test">
        <span className="nav-links__link" to="/">
          {" "}
          <span>Home |</span>
        </span>
        <span className="nav-links__link" to="/About">
          <span>About |</span>
        </span>
        <span className="nav-links__link" to="/Projects">
          <span>Projects </span>
        </span>
      </div>
    </div>
  );
};

export default Nav;
