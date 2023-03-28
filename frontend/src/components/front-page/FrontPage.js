import { Button } from "antd";
import React from "react";
import "../../scss/App.scss";
import Background from "./background";
import Card from "./cards";
import Leaderboard from "./LeaderBoard";
import Slideshow from "./SlideShow";
import SignupSlideshow from "./SlideShow";
import { Helmet } from "react-helmet";
import ChallengeArticles from "./Challenge_info";
// import EnticeSignup from "../dashboard/enticelogin";

//import Leader_Button from './LeaderBoard_Button'

function HomePage() {
  
  return (
    
    <div className="App">
       <Background></Background>
      <header className="App-header">
      <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  </Helmet>
      <nav class="nav-Bar">
      <a href="#" class="logo">Challenge Champions</a>
      <div class="nav-links">
        <div class="social-buttons">
          <a href="https://www.facebook.com/profile.php?id=100089970687570" class="social-button social-button--facebook" aria-label="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/wok_and_roll98/" class="social-button social-button--instagram" aria-label="Instagram">
            <i class="fa-brands fa-instagram"></i>          </a>
          <a href="#" class="social-button social-button--snapchat" aria-label="Snapchat">
            <i class="fab fa-snapchat-ghost"></i>
          </a>
          <a href="https://github.com/jackymomomo/Food-Pick-up-Ordering-app" class="social-button social-button--github" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="#" class="social-button social-button--codepen" aria-label="CodePen">
            <i class="fab fa-codepen"></i>
          </a>
        </div>
      </div>
      <a href="/login" id="cart-icon" class="signup-btn">LOGIN<div id="cart-icon">
        <i class="fa-solid fa-bag-shopping fa-lg"></i>
      </div></a>
    </nav>
    <div class="overlay">
<h1>Challenge Champions</h1>
<h3></h3>
	<br></br>
		</div>
      </header>
        <Card></Card>
        <ChallengeArticles></ChallengeArticles>
        <div class="grid">
        <div class="challenge-grid">
        <Background></Background>
  </div>
  
  
    </div>
    <Slideshow></Slideshow>
    <footer>
      <div class="footer-container">
        <div class="footer-logo">
          <img src="https://i.pinimg.com/564x/db/63/df/db63dfb015cec41306deee05c762d2a0.jpg" alt="Logo"></img>
          <h3>Wok & Roll</h3>
        </div>
        
        <div class="footer-social">
          <h3>Follow us on social media</h3>
          <div class="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100089970687570"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/wok_and_roll98/"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

        <div class="footer-nav">
          <div class="3d-menu">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/dashboard">Contact</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="/dashboard">Create challenge</a></li>
              <li><a href="/login">Subscribe</a></li>
              <li><a href="/login">Like</a></li>
            </ul>
          </div>
        </div>

      </div>
      <div class="footer-bottom">
        <p>&copy; 2023 Challenge Champions. All rights reserved.</p>
      </div>
    </footer>

    </div>
  );
}

export default HomePage;