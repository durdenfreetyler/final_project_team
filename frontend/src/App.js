import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";


function App() {
  const [users, setUsers] = React.useState([]);
  const [challenge, setChallenge] = React.useState([])
  
  
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



  return (
    <div>
      {users.map(users => {return <div> {users.first_name} {users.email} </div>})}

      {challenge.map(item => {return <div> {item.title} {item.description} </div>})}


        
      <Login/>
    </div>
  );
}

export default App;
