import React, { useState, useEffect } from "react";
//import "./App.css";
import ChallengeForm from "./components/ChallengeCreator";
import HomePage from "./components/FrontPage";
//import Login from "./components/Login";


function App() {
  const [users, setUsers] = useState([]);
  const [challenge, setChallenge] = useState([])
  const [user_challenge, setUser_Challenge] = useState([])
  
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
    <div>
      <select>
      {users.map(users => {return <option> {users.first_name} {users.email} </option>})}
      </select>

      <select>
      {challenge.map(challenge => {return <option> {challenge.title} {challenge.description} </option>})}
      </select>
      
      <select>
      {user_challenge.map(user_challenge => {return <option> {user_challenge.criteria_type} {user_challenge.progress} </option>})}
      </select>

        
      <HomePage/>
      <ChallengeForm/> 
    </div>
  );
}

export default App;
