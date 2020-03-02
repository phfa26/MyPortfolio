import React from "react";
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <FaGithubSquare className="footer-items__icon" />
        <FaLinkedin className="footer-items__icon" />
        <FaEnvelopeSquare className="footer-items__icon" />
      </div>
    </div>
  );
};

export default Footer;
