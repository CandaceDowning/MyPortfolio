import React, { Component } from "react";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";

class Main extends Component {
  render() {
    return (
      <div>
        <Landing />
        <About />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default Main;
