import React, { useState } from "react";
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";

import Resume from "../documents/Resume.pdf";
import cvImage from "../images/cv.svg";
import "./Footer.css";

const Footer = () => {
  const [showEmail, setShowEmail] = useState("footer-items__email-hide");

  const toggleEmail = () => {
    if (
      showEmail === "footer-items__email-hide" ||
      showEmail === "footer-items__email-out"
    ) {
      setShowEmail("footer-items__email");
    } else {
      setShowEmail("footer-items__email-out");
    }
  };

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
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          <img className="testtest" src={cvImage} alt="CV download" />
        </a>
        <FaEnvelopeSquare
          className="footer-items__icon"
          onClick={toggleEmail}
        />
      </div>
      <span className={showEmail}>paulo@amaral.com.au</span>
    </div>
  );
};

export default Footer;
