import React, { Component } from "react";
import "./landing.css";
import portrait from "../../assets/portrait.jpg";
import github from "../../assets/github.png";
import gmail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.png";

class Landing extends Component {
  render() {
    return (
      <div id='landing-main'>
        <div className='pic-info-box'>
          <img src={portrait} className='portrait' />

          <div className='landing-info-box'>
            <h1>CANDACE DOWNING</h1>
            <h2>Web Developer</h2>
            <h2>Artist</h2>
            <a href='#about-main'>LETS MEET!</a>
          </div>
        </div>
        <div id='contact-main'>
          <a target='_blank' href='https://github.com/CandaceDowning'>
            <img src={github} />
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/candace-downing/'>
            <img src={linkedin} />
          </a>
          <a
            target='_blank'
            href='https://mail.google.com/mail/?view=cm&fs=1&to=candacedowning@gmail.com&su=Hello via portfolio'>
            <img src={gmail} />
          </a>
        </div>
      </div>
    );
  }
}

export default Landing;
