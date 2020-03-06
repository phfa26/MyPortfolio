import React from "react";
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <a
          href="https://github.com/phfa26"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare className="footer-items__icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/phfamaral/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="footer-items__icon" />
        </a>
        <FaEnvelopeSquare className="footer-items__icon footer-items__icon-mail" /><p className='footer-items__icon-mail__'></p>
      </div>
    </div>
  );
};

export default Footer;
