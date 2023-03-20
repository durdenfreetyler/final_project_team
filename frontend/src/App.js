import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
