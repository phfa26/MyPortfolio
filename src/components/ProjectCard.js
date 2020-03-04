import React from "react";

import "./ProjectCard.css";

const ProjectCard = props => {
  return (
    <div className="card">
      <h3 className="card-title">{props.project.name}</h3>
      <div className="card-bar">
        <div className="card-emptybar"></div>
        <div className="card-filledbar"></div>
      </div>
      <div className="card-image">
        <img src={props.project.img} alt={props.project.name} />
      </div>
    </div>
  );
};

export default ProjectCard;
