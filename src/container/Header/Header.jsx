import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Place To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Count the Memories Not the Calories!!</p>
      
    </div>
    <div className="app__wrapper_img">
      <img src={images.page} alt="header_img"  style={{width:'100',height:'600px',}}/>
    </div>
  </div>
);

export default Header;
