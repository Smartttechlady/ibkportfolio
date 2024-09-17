import React, { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Home.css"

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);



  return (

    <div className="home-page" style={{ backgroundImage: `url(./..//.//Images/background.svg)` }}>
      <div className="container h-100">
        <div className="row align-items-center justify-content-center h-100 content-container">
          <div className=" col-md-6 col-sm-12">
            
            <div className="content">
              <TypeAnimation
                sequence={[
                  "Hello, I'm",
                  1000,
                  '',
                  1000,
                ]}
                wrapper="h2"
                cursor={true}
                repeat={Infinity}
                style={{ color: '#3E3D3D', fontWeight: 'bold' }}
              />
              <h1>
                <span className="name-black">IBUKUN</span> <span className="name-green">ODOFIN</span>
              </h1>
              <h3>UI/UX DESIGNER <span className='' style={{ color: '#BAE60A', fontWeight: 'bold' }} >|</span>  FRONTEND DEVELOPER</h3>
              <div className="buttons">
                <a href=    "./..//Images/Updated Ibukun's Resume (1).pdf" className="btn btn-dark" onclick="window.open"> Download CV</a>
                <a href="/contact" className="btn btn-dark" onclick="window.open" >Contact Me</a>
              </div>
              <div className="social-icons mt-3">
                <a href="https://www.linkedin.com/in/ibukun-odofin-549b0583/" target="_blank" rel="noreferrer">
                    <img src={("./..//Images/linkedin.png")} className='icons' alt="" />
                  </a>
                  <a href="https://github.com/users/Smartttechlady/projects/" target="_blank" rel="noreferrer">
                    <img src={("./..//Images/github.png")} className='icons' alt="" />
                 </a>
                <a href="https://www.behance.net/odofinibukun" target="_blank" rel="noreferrer">
                   <img src={("./..//Images/behance.png")} className='icons' alt="" />
               </a>
               <a href="https://wa.me/2348068469020" target="_blank"  rel="noreferrer">
                   <img src={("./..//Images/whatsapp .png")} className='icons' alt="" />
               </a>
              </div>
            </div>
          </div>
          <div className="  col-md-6 col-sm-12 text-center">
            
            <div className="profile-image">
              <img
                data-aos="flip-left"
                data-aos-duration="3000"
                src={("./..//Images/ibk's pix.png")}
                alt="Ibukun Odofin"
                className="img-fluid profile-pic"
                
              />
            </div>
          </div>
        </div>
      </div>
    </div>




  )
}

export default Home