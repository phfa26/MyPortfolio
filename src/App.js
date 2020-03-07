import React from "react";
import { Router } from "@reach/router";

import Home from "./components/Home";
import Nav from "./components/Nav";
import Card from "./components/Card";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router basename="/MyPortfolio">
        <Nav />
        <Card>
          <Home path="/" />
          <About path="/about" />
          <Projects path="/projects" />
        </Card>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
