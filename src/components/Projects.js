import React from "react";

import Expenses from "./../images/ExpensesTrackerApp.png";
import "./Projects.css";
import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      id: 0,
      name: "Skulls & Bones",
      img: require("../images/ticTacToe.png"),
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      github: "https://github.com/phfa26/ticTacToeGame",
      deployed: "https://phfa26.github.io/ticTacToeGame/",
      techStack: "JavaScript, JQuery, HTML/CSS, Bootstrap. Deployed on GitPages"
    },
    {
      id: 1,
      name: "Expenses Tracker App",
      img: require("../images/ExpensesTrackerApp.png"),
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
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
        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      github: "https://github.com/phfa26/project-2",
      deployed: "https://givng.herokuapp.com/",
      techStack:
        "React, JavaScript, Ruby-on-Rails(back-end), HTML/ CSS, Bootstrap, PostgreSQL. GitHub for version control. Deployed on Heroku."
    },
    {
      id: 3,
      name: "MockedIn",
      img: require("../images/MockedIn.png"),
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      github: "https://github.com/phfa26/MockedIn-project-3",
      deployed: "https://mockedin.heroku.com/",
      techStack:
        "React, Node, Express, JavaScript, HTML/CSS/SASS, Mongo DB, AWS-S3. GitHub for version control. Deployed on Heroku. "
    },
    {
      id: 4,
      name: "Portfolio",
      img: require("../images/Portfolio.png"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      github: "https://github.com/phfa26/MyPortfolio",
      deployed: "https://www.pauloamaral.com.au",
      techStack: "React, JavaScript, HTML/CSS"
    }
  ];

  return (
    <div className="projects-container">
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
