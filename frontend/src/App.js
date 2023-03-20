import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";


function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data.map(item => {
        return <div> {item.first_name} {item.email} </div>
      })}
      <Login/>
    </div>
  );
}

export default App;
