import React from "react";

import "./ProjectCard.css";

const ProjectCard = props => {
  return (
    <div className="wrapper">
      <div className="cols">
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="container">
            <div
              className="front"
              style={{
                backgroundImage: `url(${props.project.img})`
              }}
            >
              <div className="inner">
                <p>{props.project.name}</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
