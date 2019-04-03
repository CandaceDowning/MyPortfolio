import React, { Component } from "react";
import "./skills.css";

class Skills extends Component {
  render() {
    return (
      <div id='skills-main'>
        <h1>Skills</h1>
        <div className='skills-icons'>
          <div className='row-skills'>
            <div className='icon-box'>
              <i className='perico-react icon' />
              <p>REACT</p>
            </div>
            <div className='icon-box'>
              <i className='perico-postgres icon' />
              <p>POSTGRESQL</p>
            </div>
            <div className='icon-box'>
              <i className='perico-nodejs icon' />
              <p>NODE.JS</p>
            </div>
            <div className='icon-box'>
              <i className='perico-express icon' />
              <p>ESPRESS</p>
            </div>
          </div>

          <div className='row-skills'>
            <div className='icon-box'>
              <i className='perico-js icon' />
              <p>JAVASCRIPT</p>
            </div>
            <div className='icon-box'>
              <i className='perico-css icon' />
              <p>CSS 3</p>
            </div>
            <div className='icon-box'>
              <i className='perico-sass icon' />
              <p>SASS</p>
            </div>
            <div className='icon-box'>
              <i className='perico-html icon' />
              <p>HTML 5</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
