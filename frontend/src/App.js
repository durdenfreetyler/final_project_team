import React, { useState, useEffect } from "react";
import "./App.css";
import ChallengeCreator from "./components/Login/challange_creator/ChallangeCreator";
import Login from "./components/Login/Login";


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
    <div>
      {users.map(users => {return <div> {users.first_name} {users.email} </div>})}

      {challenge.map(challenge => {return <div> {challenge.title} {challenge.description} </div>})}

      {user_challenge.map(user_challenge => {return <div> {user_challenge.criteria_type} {user_challenge.progress} </div>})}



      <ChallengeCreator/>
    </div>
  );
}



export default App;
