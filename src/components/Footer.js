import React, { useState } from "react";
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  const [showEmail, setShowEmail] = useState("footer-items__email-hide");
  const [toggle, setToggle] = useState(false);

  const toggleEmail = () => {
    if (
      showEmail === "footer-items__email-hide" ||
      showEmail === "footer-items__email-out"
    ) {
      setShowEmail("footer-items__email");
      setToggle(true);
    } else {
      setShowEmail("footer-items__email-out");
      setToggle(false);
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