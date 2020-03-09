import React from "react";
import { Link } from "@reach/router";

import "./Nav.css";
const Nav = props => {
  return (
    <div className="nav">
      <div className="nav-links__group">
        <Link className="nav-links__link nav-links__link-home" to="/">
          <span>Home</span>
        </Link>
        <Link className="nav-links__link nav-links__link-about" to="/about">
          <span>About</span>
        </Link>
        <Link
          className="nav-links__link nav-links__link-projects"
          to="/projects"
        >
          <span>Projects</span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
