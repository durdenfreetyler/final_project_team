import React from 'react';
import '../../scss/signup.scss'

const EnticeSignup = () => {
  return (
    <div className="logsins">
      <div className="logsin content">
      <a href='/'> 
        <div className="logsin-content">
        
          <div className="logsin-img">
            
            <img src="https://cdn.discordapp.com/attachments/1073664859222319154/1089408578651176990/medit.webp" alt="Gamer" />
          </div>
          <div className="logsin-label">Home</div>
          <div className="logsin-title">
            Our home Page 
          </div>
        </div>
            </a>
      </div>
      <div className="logsin content">
      <a href='/Dashboard'> 
        <div className="logsin-content">
          <div className="logsin-img">
            <img src="https://cdn.discordapp.com/attachments/1073664859222319154/1089408603775053936/steps.jpg" alt="keyboard" />
          </div>
          <div className="logsin-label">
            Create Challenge
          </div>
          <div className="logsin-title">
            Create Challenges and Share them with your frinds!
          </div>
        </div>
            </a>
      </div>
      <div className="logsin content">
      <a href='/about-us'> 
        <div className="logsin-content">
          <div className="logsin-img">
            <img src="https://cdn.discordapp.com/attachments/1073664859222319154/1089408603171078174/rocky-steps-poster.webp" alt="Controller" />
          </div>
          <div className="logsin-label">
            About Us
          </div>
          <div className="logsin-title">
           Meet Our Development Team! And learn a little about us
          </div>
        </div>
            </a>
      </div>
     
      <div className="logsin form">
        <div className="form-title">
          <a href='/login'>Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default EnticeSignup;