import React from 'react';
 
import { FaWhatsapp,FaInstagram } from "react-icons/fa";

import {MDBFooter,MDBContainer,MDBRow,MDBCol,MDBIcon} from 'mdb-react-ui-kit';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="contact">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        
        <p className="p__opensans">ABIRAMI THEATRE OPP <br></br> CO-OPERATIVE COLONY, <br></br> KARAMADAI ROAD, <br></br> METTUPALAYAM-641301</p>
        <p className="p__opensans">+91 9715888866</p>
         
      </div>

      <div className="app__footer-links_logo">
        
        <h1 style={{color:'var(--color-golden)',fontFamily:'cursive'}}>Food Khalifa</h1>
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
       
        <MDBFooter bgcolor='light' className='text-center lext-lg-start text-muted'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
              <span style={{color:'white'}}>Get connected with us</span><br></br>
              <br></br>
              <span style={{color:'white'}}>And for Ordering</span><br></br>
              <br></br>
            </div>
            <div>
              <a href="https://www.instagram.com/manchester_south_/" className='me-4 text-reset'style={{color:'white',padding:'10px'}} ><FaInstagram size={30}/></a>
            
              <a href="https://wa.me/919715888866?text=Food%20Khalifa" style={{color:'white',padding:'10px'}}><FaWhatsapp size={30}/></a>
  
             
            </div>
          </section>
        </MDBFooter>

      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Sunday:</p>
        <p className="p__opensans">11:30 am - 11:30 pm</p>
        <p className="p__opensans">Online Delivery:</p>
        <p className="p__opensans">Closes at 10:00pm</p>
       
      </div>
    </div>
     

    {/* <div className="footer__copyright">
      <p className="p__opensans">2021 Gericht. All Rights reserved.</p>
    </div> */}

  </div>
);

export default Footer;
