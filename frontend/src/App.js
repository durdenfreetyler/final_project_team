import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChallengeForm from "./components/challenge_creator/ChallengeCreator";
import Login from "./components/Login/Login";
import HomePage from "./components/front-page/FrontPage";
import DashboardPage from "./components/dashboard/DashBoardPage";
import Leaderboard from "./components/front-page/LeaderBoard";
import Slideshow from "./components/front-page/SlideShow";


function App() {
  const [users, setUsers] = useState([]);
  const [challenge, setChallenge] = useState([])
  const [user_challenge, setUser_Challenge] = useState([])
  //Pulling in users table
  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);
  //Pulling in challenge table
  useEffect(() => {
    fetch("/challenge")
      .then((res) => res.json())
      .then((challenge) => setChallenge(challenge));
  }, []);
  //Pulling in user_challenge table
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








//<div>
{/* <select>
 // maps users table into object and creates a dropdown with username from the table 
 {users.map(users => {return <option> {users.first_name} {users.email} </option>})}
 </select>

 <select>
 // maps challenge table into object and creates a dropdown with challenge title from the table 
 {challenge.map(challenge => {return <option> {challenge.title} {challenge.description} </option>})}
 </select>
 
 <select>
 // maps user_challenge table into object and creates a dropdown with  criteria type from the table 
 {user_challenge.map(user_challenge => {return <option> {user_challenge.criteria_type} {user_challenge.progress} </option>})}
 </select> 
 */}
 {/*<ChallengeForm/> */}
//</div>