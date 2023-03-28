import React from 'react';
import '../../scss/signup.scss'

const EnticeSignup = () => {
  return (
    <div className="logsins">
      <div className="logsin content">
      <a href='/'> 
        <div className="logsin-content">
        
          <div className="logsin-img">
            
            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Gamer" />
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
            <img src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="keyboard" />
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
      <a href='/Our-Team'> 
        <div className="logsin-content">
          <div className="logsin-img">
            <img src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80" alt="Controller" />
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
          <a href='/login'>USER LOGIN</a>
        </div>
      </div>
    </div>
  );
}

export default EnticeSignup;