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
              <i class="devicon-react-original"></i>
              <p>REACT</p>
            </div>
            <div className='icon-box'>
              <i class="devicon-postgresql-plain"></i>
              <p>POSTGRESQL</p>
            </div>
            <div className='icon-box'>
              <i class="devicon-nodejs-plain"></i>
              <p>NODE.JS</p>
            </div>
            <div className='icon-box'>
              <i class="devicon-express-original"></i>
              <p>ESPRESS</p>
            </div>
          </div>
          <div className='row-skills'>
            <div className='icon-box'>
              <i class="devicon-javascript-plain"></i>
              <p>JAVASCRIPT</p>
            </div>
            <div className='icon-box'>
              <i class="devicon-css3-plain"></i>
              <p>CSS 3</p>
            </div>
            <div className='icon-box'>
              <i class="devicon-sass-original"></i>
              <p>SASS</p>
            </div>
            <div className='icon-box'>
              <i class="devicon-html5-plain"></i>
              <p>HTML 5</p>
            </div>
            <div className='icon-box'>
              <i class="devicon-bootstrap-plain"></i>
              <p>Bootstrap</p>
            </div>
            <div className='icon-box'>
              <i class="devicon-php-plain"></i>
              <p>PHP</p>
            </div>
            <div className='icon-box'>
              <i class="devicon-wordpress-plain"></i>
              <p>Wordpress</p>
            </div>
            <div className='icon-box'>
              <i class="devicon-woocommerce-plain"></i>
              <p>Woocommerce</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
