import React from "react";
import "../../scss/dashboard.scss";
import AvailableChallenges from "../challenge_creator/AvailableChallenges";
import { ChallengeCheckIn } from "../challenge_creator/ChallengeCheckIn";
import ChallengeForm from "../challenge_creator/ChallengeCreator";
import ChallengeList from "../challenge_creator/ChallengeList";
import Donate from "../challenge_creator/Donate";
import Background from "../front-page/background";
import NavBar from "../front-page/NavBar";
import EnticeSignup from "./enticelogin";
import Header from "./Header";


function Dashboard() {
  return (
    <div className="formdash">
      <Header></Header>
     <NavBar/>
      {/* <EnticeSignup/> */}
      <ChallengeList/>
       <AvailableChallenges />
              <ChallengeForm/>
              {/* <JoinChallenge />  */}
              <Donate /> 
    </div>
  );
}

export default Dashboard;
