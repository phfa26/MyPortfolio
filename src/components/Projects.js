import React from "react";

import "./Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 0,
      name: "Skulls & Bones",
      img: require("../images/TicTacToe.png"),
      description:
        "Pick your token and have fun playing this Tic-Tac-Toe game.",
      github: "https://github.com/phfa26/ticTacToeGame",
      deployed: "https://phfa26.github.io/ticTacToeGame/",
      techStack: "JavaScript, JQuery, HTML/CSS, Bootstrap. Deployed on GitPages"
    },
    {
      id: 1,
      name: "Expenses Tracker App",
      img: require("../images/ExpensesTrackerApp.png"),
      description:
        "Keep track of your small daily expenses. Group them in custom categories and never forget where you have spent those pennies again.",
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
        "It is giving time and you don't know how to organise your list and split budget? Let Givng Giv you a hand. A gift-list organiser for every occasion.",
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
        "This portfolio is a personal project. But still a project, nevertheless. Suggestion are welcome, as it seems never to be ready! :)",
      github: "https://github.com/phfa26/MyPortfolio",
      deployed: "https://www.pauloamaral.com.au",
      techStack: "React, JavaScript, HTML/CSS"
    },
    {
      id: 4,
      name: "MockedIn",
      img: require("../images/MockedIn.png"),
      description:
        "Want to see how it's going to look on LinkedIn before posting it on there? Need it to be reviewed by a recruiter/advisor before? Don't panic. MockedIn is the tool for you!",
      github: "https://github.com/phfa26/MockedIn-project-3",
      deployed: "https://mockedin.heroku.com/",
      techStack:
        "React, Node, Express, JavaScript, HTML/CSS/SASS, Mongo DB, AWS-S3. GitHub for version control. Deployed on Heroku. "
    }
  ];

  return (
    <div className="projects-container">
      <h1>Projects</h1>

      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
