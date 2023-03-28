import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import ChallengeForm from "./components/challenge_creator/ChallengeCreator";
import Login from "./components/Login/Login";
import HomePage from "./components/front-page/FrontPage";
import Leaderboard from "./components/front-page/LeaderBoard";
import Slideshow from "./components/front-page/SlideShow";
import ChallengeList from "./components/challenge_creator/ChallengeList";
import Donate from "./components/challenge_creator/Donate";
import Card from "./components/front-page/cards";
import ChallengeMenu from "./components/challenge_creator/Menu";
import ChallengeArticles from "./components/front-page/Challenge_info";
import { ChallengeCheckIn } from "./components/challenge_creator/ChallengeCheckIn";
import { JoinChallenge } from "./components/challenge_creator/JoinChallenge";
import AvailableChallenges from "./components/challenge_creator/AvailableChallenges";
import Dashboard from "./components/DashBoard/DashBoard";

function App() {
  const [users, setUsers] = useState([]);
  const [challenge, setChallenge] = useState([]);
  const [user_challenge, setUser_Challenge] = useState([]);
  const [userId, setUserId] = useState(Cookies.get("userId"));

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
        <Route
          path="/dashboard"
          element={
            <>
              {/* <AvailableChallenges /> */}
              {/* <ChallengeList />  */}
              {/* <ChallengeForm/> */}
              {/* <JoinChallenge />  */}
              <ChallengeCheckIn />
              <Donate /> 
            </>
          }
        />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/slideshow" element={<Slideshow />} />
        <Route path="/Account" element={<Dashboard/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-challenge" element={<ChallengeForm />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;

// <ChallengeList key={userId} userId={userId} challenge={challenge} />

//<div>
{
  /* <select>
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
 */
}
{
  /*<ChallengeForm/> */
}
//</div>
