import React from "react";

import "./Home.css";
const Home = props => {
  return (
    <div className="home-content">
      <div className="home-content__text">
        <h1 className="home-content__text-name">Paulo</h1>
        <h1 className="home-content__text-surname">Amaral</h1>
        <p>
          Junior Front-end
          <br />
          Web Developer
        </p>
      </div>
    </div>
  );
};

export default Home;
