import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import { images } from '../../constants';

// import { SubHeading } from '../../components';
// import { images } from '../../constants';

const  Homedecor= () => (
  <div className="app__bg app__wrapper section__padding" id="hd">
    <div className="app__wrapper_info">
      <SubHeading title="Party decorations" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>PARTY & FUNCTION DECORS</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">This is the ultimate destination for your functions and party decorations.Decorations are done on accordance 
        with your requirements and nature of the function.</p>
        <ul className='p__opensans'style={{padding:30,}}>
          <li>Birthday Celebrations</li>
          <li>Anniversary</li>
          <li>Festivals</li>
          <li>Occations</li>  
          <li>Marriage</li>
          <li>Valentines day</li>
          <li>Naming Ceremony</li>
        </ul>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.party1} alt="finus_img" />
      
    </div>
    
  </div>
);

export default Homedecor;
