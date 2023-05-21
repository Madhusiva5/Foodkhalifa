import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';


const Gallery = () => {
  return (
<div>  
  <div className='"app__gallery flex__center"'>
   <center> <h1 style={{color:'var(--color-golden)',backgroundColor:'black'}}>OUR UNIGUE WORKS</h1></center>
    <div className="app__gallery flex__center">
    <div >
        <div >
        <div class="row">
        <div class="column">
          <div className='image-container'>
          <div class="card">
            <img src={images.dec1} style={{height:260,width:310}}></img>
            <div className="overlay">
          <p style={{fontFamily:'sans-serif',color:'gold'}}>Floral ideas for haldi, mehendi and sangeet decorations at home</p>
        </div>
          </div>
          </div>
        </div>
        
        <div class="column">
          <div className="image-container">
          <div class="card"><img src={images.dec2} style={{height:260,width:310}}></img></div>
          <div className="overlay">
          <p style={{fontFamily:'sans-serif',color:'gold'}}>Paper decoration – origami and kites</p>
        </div>
        </div>
        </div>
        <div class="column">
          <div className="image-container">
          <div class="card"><img src={images.dec3} style={{height:260,width:300}}></img></div>
          <div className="overlay">
          <p style={{fontFamily:'sans-serif',color:'gold'}}>Mehendi ceremony decoration ideas at home with jhoola</p>
        </div>
        </div>
        </div>
      </div>
      <br></br><br></br><br></br>
       
        <div class="row">
        <div class="column">
          <div className="image-container">
          <div class="card">
            <img src={images.dec4} style={{height:260,width:300}}></img>
            <div className="overlay">
          <p style={{fontFamily:'sans-serif',color:'gold'}}>Grand entry decoration</p>
        </div>
        </div>
          </div>
        </div>
        
        <div class="column">
          
          <div className="image-container">
          <div class="card"><img src={images.dec5} style={{height:260,width:300}}></img></div>
          <div className="overlay">
          <p style={{fontFamily:'sans-serif',color:'gold'}}>Sangeet decoration ideas at home with lights</p>
        </div>
          </div>
        </div>
        <div class="column">
          <div className="image-container">
          <div class="card"><img src={images.dec6} style={{height:260,width:300}}></img></div>
          <div className="overlay">
          <p style={{fontFamily:'sans-serif',color:'gold'}}>Neon signs – a new trend for decoration at home</p>
        </div>
        </div>
        </div>
      </div>
        </div>
        
      </div> 
    </div>  
  </div>
</div>   
  );
};
export default Gallery;
// import React from 'react';
// import { images } from '../../constants';
// import './Gallery.css';

// const Gallery = ({ src, alt }) => {
//   return (
//     <div>
//     <div className='"app__gallery flex__center"'>
//       <div className="app__gallery flex__center">
//       <div className="image-gallery">
//       <figure className="image-container">
//         <img src={images.dec7} alt="Image 1" className="image" style={{width:'300'}}/>
//         <div className="overlay">
//           <p>Overlay text for Image 1</p>
//         </div>
//       </figure>
//       <figure className="image-container">
//         <img src={images.dec11} alt="Image 2" className="image" style={{width:'300'}}/>
//         <div className="overlay">
//           <p>Overlay text for Image 2</p>
//         </div>
//       </figure>
//       <figure className="image-container">
//         <img src={images.dec3} alt="Image 3" className="image"style={{width:'300'}} />
//         <div className="overlay">
//           <p>Overlay text for Image 3</p>
//         </div>
//       </figure>
//     </div>
//     <div className="image-gallery">
//       <figure className="image-container">
//         <img src={images.dec1} alt="Image 1" className="image" style={{width:'300'}}/>
//         <div className="overlay">
//           <p>Overlay text for Image 1</p>
//         </div>
//       </figure>
//       <figure className="image-container">
//         <img src={images.dec2} alt="Image 2" className="image" style={{width:'300'}}/>
//         <div className="overlay">
//           <p>Overlay text for Image 2</p>
//         </div>
//       </figure>
//       <figure className="image-container">
//         <img src={images.dec4} alt="Image 3" className="image"style={{width:'300'}} />
//         <div className="overlay">
//           <p>Overlay text for Image 3</p>
//         </div>
//       </figure>
//     </div>
    
//     </div>
//     </div>
//     <div className='"app__gallery flex__center"'>
//       <div className="app__gallery flex__center">
//       <div className="image-gallery">
//       <figure className="image-container">
//         <img src={images.dec6} alt="Image 1" className="image" style={{width:'300'}}/>
//         <div className="overlay">
//           <p>Overlay text for Image 1</p>
//         </div>
//       </figure>
//       <figure className="image-container">
//         <img src={images.dec8} alt="Image 2" className="image" style={{width:'300'}}/>
//         <div className="overlay">
//           <p>Overlay text for Image 2</p>
//         </div>
//       </figure>
//       <figure className="image-container">
//         <img src={images.dec9} alt="Image 3" className="image"style={{width:'300'}} />
//         <div className="overlay">
//           <p>Overlay text for Image 3</p>
//         </div>
//       </figure>
//     </div>
//     <div className="image-gallery">
//       <figure className="image-container">
//         <img src={images.dec10} alt="Image 1" className="image" style={{width:'300'}}/>
//         <div className="overlay">
//           <p>Overlay text for Image 1</p>
//         </div>
//       </figure>
//       <figure className="image-container">
//         <img src={images.dec12} alt="Image 2" className="image" style={{width:'300'}}/>
//         <div className="overlay">
//           <p>Overlay text for Image 2</p>
//         </div>
//       </figure>
//       <figure className="image-container">
//         <img src={images.dec5} alt="Image 3" className="image"style={{width:'300'}} />
//         <div className="overlay">
//           <p>Overlay text for Image 3</p>
//         </div>
//       </figure>
//       <div className='"app__gallery flex__center"'>
//       <div className="app__gallery flex__center">
//       <div className="image-gallery">
//       <figure className="image-container">
//         <img src={images.dec7} alt="Image 1" className="image" style={{width:'300'}}/>
//         <div className="overlay">
//           <p>Overlay text for Image 1</p>
//         </div>
//       </figure>
//       <figure className="image-container">
//         <img src={images.dec11} alt="Image 2" className="image" style={{width:'300'}}/>
//         <div className="overlay">
//           <p>Overlay text for Image 2</p>
//         </div>
//       </figure>
//       <figure className="image-container">
//         <img src={images.dec3} alt="Image 3" className="image"style={{width:'300'}} />
//         <div className="overlay">
//           <p>Overlay text for Image 3</p>
//         </div>
//       </figure>
//     </div>
//     </div>
//     </div>
//     </div>
    
    
//     </div>
    
    
    
    
//     </div>
    
//     </div>
    
//   );
// };

// export default Gallery;
