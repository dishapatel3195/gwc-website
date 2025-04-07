import React from 'react';
import './aboutus.css';


function Home() {
  return (
    <div>
      <div className="about-section">
        <h1>About GWC at OSU</h1>
        <h2 className="about-text">The Girls Who Code College Loop at The Ohio State University 
                empowers college women and non-binary students in 
                technology by fostering an inclusive community. 
                We're on a mission to close the gender 
                gap in tech.</h2>
      </div>
      <div className="mission-section">
        <h1>Our Mission</h1>
        <h2 className="mission-text">Girls Who Code is a national organization closing the gender gap in computer science fields. The College Loops 
            program at OSU focuses on building programming skills, sisterhood, professional development, and networking. 
            Membership is free and open to all students (regardless of gender identity), and all skill levels.</h2>
      </div>
      <div className="experiences-section">
        <h1>***add experiences***</h1>
      </div>
      
      <div className="eboard-section">
        <h1>Meet our E-Board</h1>

        <div className="profile-container">
          <div className="quote-container">
            <h1>President</h1> 
            <p>Varsha Venkateshwaran</p>
          </div>
          <img className="spotlight" src="assets/PresidentSpotlight.png" alt="President Spotlight" />
        </div>

        <hr />
        
        <div className="scrollable-gallery">
          <img className="gwc-img" src="assets/GWC1.jpg" alt="GWC Image 1" />
          <img className="gwc-img" src="assets/GWC2.jpg" alt="GWC Image 2" />
          <img className="gwc-img" src="assets/GWC3.jpg" alt="GWC Image 3" />
        </div>
      </div>

      <div className="dev-team-section">
        <h1>Meet our Development Team</h1>
        
        <div className="scrollable-gallery">
        <a href="https://www.linkedin.com/in/dishapatel319" target="_blank" rel="noopener noreferrer">
          <div className="image-container">
            <img className="gwc-img" src="assets/Disha.png" alt="Disha" />
            <p className="image-label">
              Disha Patel<br />
              <span style={{ fontSize: '15px' }}>CSE</span><br />
              <span style={{ fontSize: '15px' }}>Website Project Team Lead</span>
            </p>
          </div>
        </a>

          <div className="image-container">
            <img className="gwc-img" src="assets/GWC2.jpg" alt="GWC Image 2" />
            <p className="image-label">GWC Image 2</p> 
          </div>
          <div className="image-container">
            <img className="gwc-img" src="assets/GWC3.jpg" alt="GWC Image 3" />
            <p className="image-label">GWC Image 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
