import React, { useState, useEffect } from "react";
// import
import ChallengeForm from "./components/challenge_creator /ChallengeCreator";
import Login from "./components/Login/Login";
import HomePage from "./components/front-page/FrontPage";


function App() {
  const [users, setUsers] = React.useState([]);
  const [challenge, setChallenge] = React.useState([])
  const [user_challenge, setUser_Challenge] = React.useState([])
  
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
 
      <HomePage/>
  );
}

export default App;
