import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';
import { NavLink } from 'react-router-dom';


const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      {/* <img src={images.G} alt="G_overlay" /> */}
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Food Khalifa's Indian cuisine reflects an 8,000-year history of various groups and cultures interacting with the Indian subcontinent, leading to diversity of flavours and regional cuisines found in modern-day India. </p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        {/* <img src={images.aes1} alt="about_knife" /> */}
        <h1 style={{color:'var(--color-golden)'}}>Food Khalifa</h1>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Services</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Restaurant<br></br>Party Halls<br></br>Outdoor Catering<br></br>Function Decors</p>
        {/* <button type="button" className="custom__button"><NavLink to="#contact">Contact</NavLink></button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;
