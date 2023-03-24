import React, { useState, useEffect } from "react";
// import
import ChallengeForm from "./components/challenge_creator /ChallengeCreator";
import Login from "./components/Login/Login";
import HomePage from "./components/front-page/FrontPage";
import ChallengeList from "./components/challenge_creator /ChallengeList";
import Cookies from "js-cookie"

function App() {
  const [users, setUsers] = React.useState([]);
  const [challenge, setChallenge] = React.useState([]);
  const [user_challenge, setUser_Challenge] = React.useState([]);
  const [userId, setUserId] = useState(Cookies.get("userId"));

  React.useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  React.useEffect(() => {
    fetch("/challenge")
      .then((res) => res.json())
      .then((challenge) => setChallenge(challenge));
  }, []);

  React.useEffect(() => {
    fetch("/user_challenge")
      .then((res) => res.json())
      .then((user_challenge) => setUser_Challenge(user_challenge));
  }, []);

  return (
    <div>
      <HomePage />
      <Login />
      <ChallengeForm/>
      <ChallengeList key={userId} userId={userId} challenge={challenge} />
    </div>
  );
}

export default App;
