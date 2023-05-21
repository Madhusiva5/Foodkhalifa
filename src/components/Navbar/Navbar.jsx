import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div>
       
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.h2} alt="app__logo"  style={{height:'50',width:'50'}}/>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="/">Home</a></li>
        <li className="p__opensans"><a href="/menu">Menu</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="/dec">Function Decors</a></li>
        <li className="p__opensans"><a href="#ph">Party Halls</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        {/* <a href="#login" className="p__opensans"></a> */}
        {/* <div /> */}
        <a href="https://www.zomato.com/mettupalayam/food-khalifa-mettupalayam-locality/order" className="p__opensans">For Order</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="/" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="/ph" onClick={() => setToggleMenu(false)}>Party Halls</a></li>
              <li><a href="/menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="/dec" onClick={() => setToggleMenu(false)}>Function Decors</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
