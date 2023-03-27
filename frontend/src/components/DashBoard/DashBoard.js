import React from "react";
import "../../scss/dashboard.scss";
import ChallengeList from '../challenge_creator/ChallengeList';
import Background from "../front-page/background";
import EnticeSignup from "./enticelogin";


function Dashboard() {
  return (
    <div className="formdash">
      <Background/>
     <EnticeSignup/>
     <ChallengeList/>
    </div>
  );
}

export default Dashboard;
