import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChallengeForm from "./components/challenge_creator /ChallengeCreator";
import Login from "./components/Login/Login";
import HomePage from "./components/front-page/FrontPage";
import DashboardPage from "./components/dashboard/DashBoardPage";
import Leaderboard from "./components/front-page/leaderboard";
import Slideshow from "./components/front-page/SlideShow";




function App() {
  const [users, setUsers] = useState([]);
  const [challenge, setChallenge] = useState([]);
  const [user_challenge, setUser_Challenge] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    fetch("/challenge")
      .then((res) => res.json())
      .then((challenge) => setChallenge(challenge));
  }, []);

  useEffect(() => {
    fetch("/user_challenge")
      .then((res) => res.json())
      .then((user_challenge) => setUser_Challenge(user_challenge));
  }, []);


  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/slideshow" element={<Slideshow />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-challenge" element={<ChallengeForm />} />
      </Routes>
    </Router>
    
  );
}

export default App;
