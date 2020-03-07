import React from "react";
import { Link } from "@reach/router";

import "./Nav.css";
const Nav = props => {
  return (
    <div className="nav-links">
      <div className="nav-links__group">
        <Link className="nav-links__link" to="/">
          <span>Home</span>
        </Link>
        <span className="nav-links__link"> - </span>
        <Link className="nav-links__link" to="/about">
          <span>About</span>
        </Link>
        <span className="nav-links__link"> - </span>
        <Link className="nav-links__link" to="/projects">
          <span>Projects</span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;