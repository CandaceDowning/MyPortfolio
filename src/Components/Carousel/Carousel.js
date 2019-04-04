import React from "react";
import "./carousel.css";

const Carousel = props => {
  return (
    <div className='mainCarousel'>
      <div className='slider'>
        <div className='shadow' />
        <figure>
          <div id='one' className='slide'>
            <img className='img' src={props.img1} alt='slide-one' />
          </div>

          <div id='two' className='slide'>
            <img className='img' src={props.img2} alt='slide-two' />
          </div>

          <div id='three' className='slide'>
            <img className='img' src={props.img3} alt='slide-three' />
          </div>

          <div id='four' className='slide'>
            <img className='img' src={props.img4} alt='slide-three' />
          </div>

          <div id='four' className='slide'>
            <img className='img' src={props.img5} alt='slide-three' />
          </div>
          {/* <div id='four' className='slide'>
            <img className='img' src={props.img6} alt='slide-three' />
          </div> */}
        </figure>
      </div>
    </div>
  );
};

export default Carousel;
