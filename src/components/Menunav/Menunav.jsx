import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Menunav.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Menupage from '../Menupage';


const Menunav = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/menu' element={<Menupage/>}></Route>
      </Routes>
      </BrowserRouter> */}
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.fk} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="/">Home</a></li>
        <li className="p__opensans"><a href="#starters">Starters</a></li>
        <li className="p__opensans"><a href="#mc">Main-Course</a></li>
        <li className="p__opensans"><a href="#ind">Indian Cusines</a></li>
        <li className="p__opensans"><a href="#soup">Soups</a></li>
        <li className="p__opensans"><a href="#briyani">Biriyani</a></li>
        <li className="p__opensans"><a href="#egg">Egg</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
        
      </ul>
      <div className="app__navbar-login">
        
        <div />
        <a href="https://www.zomato.com/mettupalayam/food-khalifa-mettupalayam-locality/order" className="p__opensans">For Ordering</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="/" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="/menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
    </div>
  );
};

export default Menunav;
