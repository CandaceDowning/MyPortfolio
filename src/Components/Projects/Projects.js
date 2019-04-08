import React, { Component } from "react";
import "./projects.css";
import Carousel from "../Carousel/Carousel";

import pinkArrow from "../../assets/down-arrow-pink.png";
import turqArrow from "../../assets/down-arrow-turq.png";

import chromaChart from "../../assets/chromaglow/chart.jpg";
import chromaConsole from "../../assets/chromaglow/command console.jpg";
import chromaEmail from "../../assets/chromaglow/email-body.jpg";
import chromaLanding from "../../assets/chromaglow/landing.jpg";
import chromaQuiz from "../../assets/chromaglow/quiz.jpg";
import chromaDestruct from "../../assets/chromaglow/selfdestruct.jpg";

import flavorBrowse from "../../assets/flavor/browse.png";
import flavorForum from "../../assets/flavor/forum.png";
import flavorLanding from "../../assets/flavor/landing-page.jpg";
import flavorLarge from "../../assets/flavor/large-recipe.png";
import flavorPlan from "../../assets/flavor/plan.png";
import flavorProfile from "../../assets/flavor/profile.png";

import rainbowRed from "../../assets/rainbow/red.png";
import rainbowYellow from "../../assets/rainbow/yellow.png";
import rainbowGreen from "../../assets/rainbow/green.png";
import rainbowBlue from "../../assets/rainbow/blue.png";
import rainbowPurple from "../../assets/rainbow/purple.png";
import rainbowGallery from "../../assets/rainbow/gallery.png";

class Projects extends Component {
  render() {
    return (
      <div id='projects-main'>
        <h1 className='project-title'>Projects</h1>
        <div className='carousel-info'>
          <Carousel
            img1={chromaLanding}
            img2={chromaConsole}
            img3={chromaQuiz}
            img4={chromaChart}
            img5={chromaEmail}
          />
          <div className='info one'>
            <h1>Chroma-Glow</h1>
            <p>
              Chroma-Glow is an educational arcade simulator with a science
              fiction theme that was personally developed over three weeks. It
              includes mini games and storyline elements to encourage continued
              learning and maintain interest in the subject matter. Won 'Best
              UI' in my DevMountain cohort.
            </p>
            <p>
              Tech Used: React, Express, Node, SCSS, Redux, bcrypt, Postgress,
              Redux
            </p>{" "}
            <a href='chroma-glow.space'>View</a>
          </div>
        </div>
        <div>
          <a href='#project-2'>
            <img src={pinkArrow} alt='down arrow' className='down-pink' />
          </a>
        </div>

        <div className='carousel-info middle' id='project-2'>
          <div className='info two'>
            <h1>Flavor-Savor</h1>
            <p>
              Flavor-Savors is a full stack application used to build meal plans
              from a database of user input recipes, as well as a forum for
              cooking related topics. Firebase auth was used for access to
              registered user restricted features such as inputing recipes,
              maintaining favorites list, and posting to the forum. Data flow
              system included planning of 7 days of meals, four meals per day,
              and supports multiple recipes for each meal.
            </p>
            <p>
              Tech Used: React, Express, Node, SCSS, Redux, bcrypt, PostgreSQL,
              Redux
            </p>

            <a href='https://github.com/flavor-savors/flavor-savors'>
              View on GitHub
            </a>
          </div>
          <Carousel
            img1={flavorLanding}
            img2={flavorBrowse}
            img3={flavorLarge}
            img4={flavorForum}
            img5={flavorProfile}
          />{" "}
        </div>
        <a href='#project-3'>
          <img src={turqArrow} alt='down arrow' className='down-turq' />
        </a>

        <div className='carousel-info last'>
          <Carousel
            img1={rainbowRed}
            img2={rainbowYellow}
            img3={rainbowGreen}
            img4={rainbowBlue}
            img5={rainbowPurple}
          />
          <div className='info one' id='project-3'>
            <h1>Rainbow Gallery</h1>
            <p>
              Rainbow-Gallery is a simple web application that utilizes the
              Unsplash.com API. This app was created in order to learn full CRUD
              functionality, and therefore does not utilize a database. The
              temporary nature of the information was utilized in concept
              development to make a comparison to the end product and naturally
              occuring rainbows. The user can click colored buttons and a call
              is made to unsplash and a randomizing algorithm pulls one image
              from the results to display. Users can then save the current image
              by clicking the rainbow button. The images are then tagged with
              the color used for the query and stored in the server. In the
              gallery view the user has the ability to edit the color tag and
              delete the image.
            </p>
            <p>Tech Used: React, Axios, Express</p>
            <a href='https://github.com/CandaceDowning/rainbow-gallery'>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
