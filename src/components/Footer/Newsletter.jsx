import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Newsletter = () => {
  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jurc9h7', 'template_h7ozq8r', form.current, '5lvREnTMnINeA5_q2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 
  };
  return(
  <div style={{border:"2px solid var(--color-golden)",width:"60%",height:'500px'}}><br></br>
    <div style={{alignItems:"center",textAlign:"center"}}>
      <SubHeading title="Feedback" />
      <h1 className="headtext__cormorant"></h1>
      <p className="p__opensans"> Never miss to share your experience!</p>
    
    <br/>
      <form ref={form} onSubmit={sendEmail} className="forms" >
      <input type="email" name="email"placeholder="Enter your email address"className="forms" style={{border:'2px solid var(--color-golden)',backgroundColor:'black',color:'white'}} /> 
      <br/><br></br>
      <br/>
      <input type="text" name="nam" placeholder='Enter your name' className="forms" style={{border:'2px solid var(--color-golden)',backgroundColor:'black',color:'white'}}/>
      <br></br><br></br>
      <br/>
      <textarea placeholder='Enter your feedback' name="feed" className="forms" style={{border:'2px solid var(--color-golden)',backgroundColor:'black',color:'white'}}></textarea>
      <br/><br></br>
      <button type="submit" value="send" style={{textAlign:"center"}} className="custom__button">Send</button>
     </form>
      </div>
      
      <br></br>
      {/* <div className="rating">
      Star Rating: <br></br>
       <button type="button"> <Starrate/></button> */}
       {/* <div class="rating">
    <input type="radio" name="star"/><span class="star"> </span>
    <input type="radio" name="star"/><span class="star"> </span>
    <input type="radio" name="star"/><span class="star"> </span>
    <input type="radio" name="star"/><span class="star"> </span>
    <input type="radio" name="star"/><span class="star"> </span>
    <span class="emo"> </span>
  </div> */}
      
      {/* </div>
      */}
      
      <br></br>
      
      </div>
      )};

export default Newsletter;
