import React from "react";

import "./Project.css";

const ProjectCard = props => {
  return (
    <div className="project">
      <div className="project-container">
        <div className="project-image__container">
          <img alt={props.project.name} src={props.project.img} />
        </div>

        <div className="project-container__text">
          <p className="project-container__text-title">TITULO</p>
          <p className="project-container__text-description">
            DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION
            DESCRIPTION DESCRIPTION DESCRIPTION
          </p>
        </div>
        <div className="project-links">
          <a href="#" className="project-links__link">
            ANCHOR 1
          </a>
          <a href="#" className="project-links__link">
            {" "}
            ANCHOR 2
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
