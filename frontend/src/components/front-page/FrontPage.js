import { Button } from "antd";
import React from "react";
import "../../scss/Main-Screen.scss";
import Background from "./background";
import Card from "./cards";
import Leaderboard from "./LeaderBoard";
import Slideshow from "./SlideShow";
import { Helmet } from "react-helmet";
import ChallengeArticles from "./Challenge_info";
import NavBar from "./NavBar";
import Header from "../DashBoard/Header";
import EnticeSignup from "../DashBoard/enticelogin";

//import Leader_Button from './LeaderBoard_Button'

function HomePage() {
  
  return (
    
    <div className="App">
       <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  </Helmet>
      <Header></Header>
       <Background></Background>
        <NavBar></NavBar>
        <Card></Card>
        <ChallengeArticles></ChallengeArticles>
        <div class="grid">
        <div class="challenge-grid">
        <Background></Background>
  </div>
  
  
    </div>
    <Slideshow></Slideshow>
    <EnticeSignup/>
    {/* <Leaderboard/> */}
    <footer>
      <div class="footer-container">
        <div class="footer-logo">
          <img src="https://upload.wikimedia.org/wikipedia/en/6/66/Invasopen.jpeg" alt="Logo"></img>
          <h3>Challenge Accepted</h3>
        </div>
        
        <div class="footer-social">
          <h3>Follow us on social media</h3>
          <div class="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100089970687570"><i class="fab fa-facebook"></i></a>
            <a href="https://github.com/durdenfreetyler/final_project_team/blob/master/frontend/src/components/front-page/FrontPage.js"><i class="fab fa-github"></i></a>
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
        <p>&copy; 2023 Challenge Accepted. All rights reserved.</p>
      </div>
    </footer>

    </div>
  );
}

export default HomePage;