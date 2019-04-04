import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className='header-main'>
        <nav className='nav-bar'>
          <a href='#landing-main'>
            <button className='nav-name'>CANDACE DOWNING</button>
          </a>
          <div className='nav-btn-bar'>
            <a href='#about-main'>
              <button className='nav-btn'>About</button>
            </a>
            {/* <a href='#skills-main'>
              <button className='nav-btn'>Skills</button>
            </a> */}
            <a href='#projects-main'>
              <button className='nav-btn'>Projects</button>
            </a>
            {/* <a href='#contact-main'>
              <button className='nav-btn'>Contact</button>
            </a> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
