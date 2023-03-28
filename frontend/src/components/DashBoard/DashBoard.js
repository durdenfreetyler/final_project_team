import React from "react";
import "../../scss/dashboard.scss";
import ChallengeList from "../challenge_creator/ChallengeList";
import Background from "../front-page/background";
import NavBar from "../front-page/NavBar";
import EnticeSignup from "./enticelogin";
function Dashboard() {
  return (
    <div className="formdash">
     <NavBar/>
      <EnticeSignup/>
      <ChallengeList/>
      
    </div>
  );
}

export default Dashboard;
