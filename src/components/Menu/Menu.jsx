import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './Menu.css';
import Menunav from '../Menunav/Menunav';

const Menu = () => (
<div>
  <div className="app__specialMenu flex__center section__padding">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte"/>
      <h1 className="headtext__cormorant">FK&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu" id='starters'>
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Veg Starters</p>
        <div className="app__specialMenu_menu_items" style={{fontSize:'10px'}}>
          {data.vegstarters.map((vegstarters, index) => (
            <MenuItem key={vegstarters.food + index} title={vegstarters.food} price={vegstarters.rate} />
          ))}
        </div>
      </div>
      

      <div className="app__specialMenu-menu_img">
        <img src={images.brown} alt="menu__img" /><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <img src={images.menuitem} alt="menu__img" /><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <img src={images.starters} alt="menu__img" />
      </div>
      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">NonVeg Starters</p>
        <div className="app__specialMenu_menu_items">
          {data.nvstarters.map((nvstarters, index) => (
            <MenuItem key={nvstarters.food + index} title={nvstarters.food} price={nvstarters.rate} />
          ))}
        </div>
      </div>
    </div>


    <div className="app__specialMenu-menu" id='mc'>
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Veg Main-Course</p>
        <div className="app__specialMenu_menu_items">
          {data.vegmc.map((vegmc, index) => (
            <MenuItem key={vegmc.food + index} title={vegmc.food} price={vegmc.rate} />
          ))}
        </div>
      </div>
      
            <br></br><br></br><br></br>
      <div className="app__specialMenu-menu_img">
        <img src={images.menuitem} alt="menu__img"  />
      </div>
      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">NonVeg Main-Course</p>
        <div className="app__specialMenu_menu_items">
          {data.nonvegmc.map((nonvegmc, index) => (
            <MenuItem key={nonvegmc.food + index} title={nonvegmc.food} price={nonvegmc.rate} />
          ))}
        </div>
      </div>

    </div>

    <div className="app__specialMenu-menu" id='ind'>
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Indian Veg</p>
        <div className="app__specialMenu_menu_items">
          {data.indveg.map((indveg, index) => (
            <MenuItem key={indveg.food + index} title={indveg.food} price={indveg.rate} />
          ))}
          <center><p className="app__specialMenu-menu_heading" id='briyani'>Briyani</p></center>
          {data.briyani.map((briyani, index) => (
            <MenuItem key={briyani.food + index} title={briyani.food} price={briyani.rate} />
          ))}
          <center><p className="app__specialMenu-menu_heading" id='egg'>Egg</p></center>
          {data.eggfood.map((eggfood, index) => (
            <MenuItem key={eggfood.food + index} title={eggfood.food} price={eggfood.rate} />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.main} alt="menu__img" />
      </div>
      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Indian NonVeg</p>
        <div className="app__specialMenu_menu_items">
          {data.indnonveg.map((indnonveg, index) => (
            <MenuItem key={indnonveg.food + index} title={indnonveg.food} price={indnonveg.rate} />
          ))}
        </div>
      </div>  
    </div>
    


    <div className="app__specialMenu-menu" id='soup'>
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Veg Soups</p>
        <div className="app__specialMenu_menu_items">
          {data.vegsoup.map((vegsoup, index) => (
            <MenuItem key={vegsoup.food + index} title={vegsoup.food} price={vegsoup.rate} />
          ))}
        </div>
      </div>
      
            <br></br><br></br><br></br>
      <div className="app__specialMenu-menu_img">
        <img src={images.menuitem} alt="menu__img"  />
      </div>
      <div className="app__specialMenu-menu_cocktails  flex__center" >
        <p className="app__specialMenu-menu_heading">NonVeg Soups</p>
        <div className="app__specialMenu_menu_items">
          {data.nvsoup.map((nvsoup, index) => (
            <MenuItem key={nvsoup.food + index} title={nvsoup.food} price={nvsoup.rate} />
          ))}
        </div>
      </div>

    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>



    
  </div>
  
  
  
  </div>
);

export default Menu;
