import React from "react";

import "./ProjectCard.css";

const ProjectCard = props => {
  return (
    <div className="wrapper">
      <div className="cols">
        <div className="col">
          <div className="container">
            <div
              className="front"
              style={{
                backgroundImage: `url(${props.project.img})`
              }}
            >
              <div className="inner">
                <p>{props.project.name}</p>
                {/* <span>Lorem ipsum</span> */}
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p className="inner-text__description">
                  {props.project.description}
                </p>
                <p className="inner-text__tech">{props.project.techStack}</p>

                <div className="back-buttons">
                  <form
                    className="back-buttons__button"
                    action={props.project.github}
                    target="_blank"
                  >
                    <input type="submit" value="</> Code" />
                  </form>
                  <form
                    className="back-buttons__button"
                    action={props.project.deployed}
                    target="_blank"
                  >
                    <input type="submit" value={"Live demo"} />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
