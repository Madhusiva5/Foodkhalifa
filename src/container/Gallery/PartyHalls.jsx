import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const PartyHalls = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  
  return (
    <div>
    <div className="app__gallery flex__center" id='ph'>
      <div className="app__gallery-content">
        <SubHeading title="Photo Gallery" />
        <h1 className="headtext__cormorant">Party Halls</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>We are also providing Party Halls for enough 100 seats at lower cost and with unique and best planning</p>
        <button type="button" className="custom__button">Contact Us</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.h1, images.h3, images.h4, images.h5].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
      
      
    </div>

        
      </div>
    
  );
};
export default PartyHalls;