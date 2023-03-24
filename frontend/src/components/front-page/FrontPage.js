import React from 'react';
import "../../scss/app.scss"


function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
      <nav className="navMenu">
      <a href="#">Home</a>
      <a href="#">Blog</a>
      <a href="#">Work</a>
      <a href="#">About</a>
      <div className="dot"></div>
    </nav>
    <div className="overlay">
<h1>Challenge Champions</h1>
<h3></h3>
	<br></br>
	<button>READ MORE</button>
		</div>
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
        <div className="grid">
        <div className="challenge-grid">
  <div className="challenge">
    <h2 className="challenge-title">30-Day Plank Challenge</h2>
    <p className="challenge-description">Build core strength and endurance by holding a plank for longer periods of time over 30 days.</p>
  </div>
  <div className="challenge">
    <h2 className="challenge-title">No-Sugar Challenge</h2>
    <p className="challenge-description">Cut out all added sugars from your diet for 30 days to improve your health and reduce cravings.</p>
  </div>
  <div className="challenge">
    <h2 className="challenge-title">100 Pushup Challenge</h2>
    <p className="challenge-description">Increase your upper body strength and endurance by working up to 100 pushups over 30 days.</p>
  </div>
  <div className="challenge">
    <h2 className="challenge-title">Meditation Challenge</h2>
    <p className="challenge-description">Develop a daily meditation practice over 30 days to reduce stress and improve mental clarity.</p>
  </div>
  <div className="challenge">
    <h2 className="challenge-title">10,000 Steps Challenge</h2>
    <p className="challenge-description">Get more active by aiming to walk 10,000 steps per day for 30 days.</p>
  </div>
  <div className="challenge">
    <h2 className="challenge-title">30-Day Yoga Challenge</h2>
    <p className="challenge-description">Improve your flexibility and mindfulness by practicing yoga for 30 days straight.</p>
 </div>
  </div>
    </div>
    <footer>
  <div className="container">
    <div className="banana">
      <div className="col-md-4">
        <h3>About Us</h3>
        <p>We are a team of web developers who are passionate about creating beautiful and functional websites.</p>
      </div>
      <div className="col-md-4">
        <h3>Contact Us</h3>
        <ul className="contact-list">
          <li><i className="fa fa-map-marker"></i> 123 Main Street, Anytown, USA</li>
          <li><i className="fa fa-phone"></i> (555) 555-5555</li>
          <li><i className="fa fa-envelope"></i> info@yourwebsite.com</li>
        </ul>
      </div>
      <div className="col-md-4">
        <h3>Follow Us</h3>
        <ul className="social-list">
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-instagram"></i></a></li>
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
