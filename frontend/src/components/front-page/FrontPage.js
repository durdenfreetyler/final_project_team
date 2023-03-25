import { Button } from 'antd';
import React from 'react';
import "../../scss/app.scss"
import Leaderboard from './LeaderBoard'
import Slideshow from './SlideShow';
import SignupSlideshow from './SlideShow';
//import Leader_Button from './LeaderBoard_Button'


function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
      <nav class="navMenu">
      <a href="/">Home</a>
      <a href="/dashboard">Account</a>
      <a href="/create-challenge">Create</a>
      <a href="#">About</a>
      <div class="dot"></div>
    </nav>
    <div class="overlay">
<h1>Challenge Champions</h1>
<h3></h3>
	<br></br>
	<a href='/login' className='button'> login </a>
		</div>
    {/* <Leader_Button></Leader_Button> */}
      </header>
      <div className="images">
        <div className="images-row">
          <div className="col-md-4">
            <img src="https://via.placeholder.com/250x100" alt="Placeholder" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src="https://via.placeholder.com/250x100" alt="Placeholder" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src="https://via.placeholder.com/250x100" alt="Placeholder" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src="https://via.placeholder.com/250x100" alt="Placeholder" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src="https://via.placeholder.com/250x100" alt="Placeholder" className="img-fluid" />
          </div>
        </div>
        <div class="grid">
        <div class="challenge-grid">
  <div class="challenge">
    <h2 class="challenge-title">30-Day Plank Challenge</h2>
    <p class="challenge-description">Build core strength and endurance by holding a plank for longer periods of time over 30 days.</p>
  </div>
  <div class="challenge">
    <h2 class="challenge-title">No-Sugar Challenge</h2>
    <p class="challenge-description">Cut out all added sugars from your diet for 30 days to improve your health and reduce cravings.</p>
  </div>
  <div class="challenge">
    <h2 class="challenge-title">100 Pushup Challenge</h2>
    <p class="challenge-description">Increase your upper body strength and endurance by working up to 100 pushups over 30 days.</p>
  </div>
  <div class="challenge">
    <h2 class="challenge-title">Meditation Challenge</h2>
    <p class="challenge-description">Develop a daily meditation practice over 30 days to reduce stress and improve mental clarity.</p>
  </div>
  <div class="challenge">
    <h2 class="challenge-title">10,000 Steps Challenge</h2>
    <p class="challenge-description">Get more active by aiming to walk 10,000 steps per day for 30 days.</p>
  </div>
  <div class="challenge">
    <h2 class="challenge-title">30-Day Yoga Challenge</h2>
    <p class="challenge-description">Improve your flexibility and mindfulness by practicing yoga for 30 days straight.</p>
 </div>
 
  </div>
  <Slideshow></Slideshow>
    </div>
    <Leaderboard></Leaderboard>
    <footer>
  <div class="container">
    <div class="banana">
      <div class="col-md-4">
        <h3>About Us</h3>
        <p>We are a team of web developers who are passionate about creating beautiful and functional websites.</p>
      </div>
      <div class="col-md-4">
        <h3>Contact Us</h3>
        <ul class="contact-list">
          <li><i class="fa fa-map-marker"></i> 123 Main Street, Anytown, USA</li>
          <li><i class="fa fa-phone"></i> (555) 555-5555</li>
          <li><i class="fa fa-envelope"></i> info@yourwebsite.com</li>
        </ul>
      </div>
      <div class="col-md-4">
        <h3>Follow Us</h3>
        <ul class="social-list">
          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
          <li><a href="#"><i class="fa fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

      </div>
    </div>
  );
}

export default HomePage;