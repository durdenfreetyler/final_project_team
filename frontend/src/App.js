import React, { useState, useEffect } from "react";
//import "./App.css";
import ChallengeForm from "./components/ChallengeCreator";
import HomePage from "./components/FrontPage";
//import Login from "./components/Login";


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
    <div>
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
        
      <HomePage/>
      {/*<ChallengeForm/> */}
    </div>
  );
}

export default App;
