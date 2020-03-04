import React from "react";

import "./Projects.css";
import ProjectCard from "./ProjectCard";
import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      id: 0,
      name: "Skulls & Bones",
      img: require("../images/ticTacToe.png"),
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
      github: "https://github.com/phfa26/ticTacToeGame",
      deployed: "https://phfa26.github.io/ticTacToeGame/",
      techStack: "JavaScript, JQuery, HTML/CSS, Bootstrap. Deployed on GitPages"
    },
    {
      id: 1,
      name: "Expenses Tracker App",
      img: require("../images/ExpensesTrackerApp.png"),
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      github: "https://github.com/phfa26/ExpensesTrackerApp",
      deployed: "https://my-expenses-tracker-project.herokuapp.com/",
      techStack:
        "Ruby-on-Rails, HTML/CSS, Bootstrap, PostgreSQL. Deployed on Heroku."
    },
    {
      id: 2,
      name: "Givng",
      img: require("../images/GivngApp.png"),
      description:
        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
      github: "https://github.com/phfa26/project-2",
      deployed: "https://givng.herokuapp.com/",
      techStack:
        "React, JavaScript, Ruby-on-Rails(back-end), HTML/ CSS, Bootstrap, PostgreSQL. GitHub for version control. Deployed on Heroku."
    },
    {
      id: 3,
      name: "Portfolio",
      img: require("../images/Portfolio.png"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      github: "https://github.com/phfa26/MyPortfolio",
      deployed: "https://www.pauloamaral.com.au",
      techStack: "React, JavaScript, HTML/CSS"
    },
    {
      id: 4,
      name: "MockedIn",
      img: require("../images/MockedIn.png"),
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
      github: "https://github.com/phfa26/MockedIn-project-3",
      deployed: "https://mockedin.heroku.com/",
      techStack:
        "React, Node, Express, JavaScript, HTML/CSS/SASS, Mongo DB, AWS-S3. GitHub for version control. Deployed on Heroku. "
    }
  ];

  return (
    <div className="projects-container">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
