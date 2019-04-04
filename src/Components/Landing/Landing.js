import React, { Component } from "react";
import "./landing.css";
import portrait from "../../assets/portrait.jpg";
import github from "../../assets/github.png";
import gmail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin-icon.png";

class Landing extends Component {
  render() {
    return (
      <div id='landing-main'>
        <div className='pic-info-box'>
          <img src={portrait} className='portrait' />

          <div className='landing-info-box'>
            <h1>Web Developer</h1>
            <h1>Artist</h1>
            <a className='meet' href='#about-main'>
              LETS MEET!
            </a>
          </div>
        </div>
        <div id='contact-main'>
          <a target='_blank' href='https://github.com/CandaceDowning'>
            <img className='contact-icon' src={github} alt='github' />
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/candace-downing/'>
            <img className='contact-icon' src={linkedin} alt='linkedin' />
          </a>
          <a
            target='_blank'
            href='https://mail.google.com/mail/?view=cm&fs=1&to=candacedowning@gmail.com&su=Hello via portfolio'>
            <img className='contact-icon' src={gmail} alt='gmail' />
          </a>
        </div>
      </div>
    );
  }
}

export default Landing;
