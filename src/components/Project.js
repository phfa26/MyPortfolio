import React from "react";

import "./Project.css";

const Project = props => {
  return (
    <div className="project-card">
      <div className="project-card__content">
        <img
          className="project-card__image"
          src={props.project.img}
          alt={props.project.name + " screenshot"}
        ></img>
        <div className="project-card__text">
          <p className="project-card__title">{props.project.name}</p>
          <p>{props.project.description}</p>
          <p> Tech Stack: {props.project.techStack}</p>
          <a
            href={props.project.github}
            target="_blank"
            style={{ display: "block" }}
            rel="noopener noreferrer"
          >
            Check the code
          </a>
          <a
            href={props.project.deployed}
            target="_blank"
            style={{ display: "block" }}
            rel="noopener noreferrer"
          >
            Live App
          </a>
        </div>
      </div>
      <hr
        style={{
          display: "flex",
          color: "white",
          zIndex: "1000",
          width: "65%",
          margin: "2rem",
          border: "0.7px solid lightgrey"
        }}
      ></hr>
    </div>
  );
};

export default Project;
