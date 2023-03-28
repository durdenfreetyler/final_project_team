import React from 'react';
import '../../scss/aboutus.scss'
import NavBar from '../front-page/NavBar';

const AboutUs = () => {
  return (
    <header className="App-header">
    <NavBar/>
      <div class="overlay">
  <h3></h3>
    <br></br>
      </div>
    <section className="about-us">
    
      <div className="container">
        <h2>About Us</h2>
        <p>We are a team of passionate individuals who are committed to providing the best services to our customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit ac fringilla tincidunt, justo nulla consequat mi, eu venenatis lectus lacus id odio.</p>
      </div>
    </section>
        </header>
  );
};

export default AboutUs;
