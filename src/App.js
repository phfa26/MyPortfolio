import React from "react";
import { Router } from "@reach/router";

import Home from "./components/Home";
import Nav from "./components/Nav";
import Card from "./components/Card";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Card>
        <Router>
          <Home path="/" />
          <About path="/about" />
          {/* <Projects path="/Projects"/> */}
        </Router>
      </Card>
      <Footer />
    </div>
  );
};

export default App;
