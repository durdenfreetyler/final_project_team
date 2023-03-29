import React, { useState } from "react";
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
import axios from "axios";
import ChallengePointsList from "../challenge_creator/ChallengePointsList";

function Dashboard() {
  const [currentChallenges, setCurrentChallenges] = useState([]);
  const [expiredChallenges, setExpiredChallenges] = useState([]);

  const fetchUserChallenges = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/user_challenge`, {
        withCredentials: true,
      });
      const challenges = response.data;
      const currentDate = new Date().getTime();
      const expired = challenges.filter(
        (challenge) =>
          currentDate >=
          new Date(challenge.expiration_date.toString()).getTime()
      );
      const active = challenges.filter(
        (challenge) =>
          currentDate < new Date(challenge.expiration_date.toString()).getTime()
      );
      setCurrentChallenges(active);
      setExpiredChallenges(expired);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="formdash">
      <Header></Header>
      <NavBar />
      <ChallengeList
        fetchUserChallenges={fetchUserChallenges}
        setCurrentChallenges={setCurrentChallenges}
        currentChallenges={currentChallenges}
        expiredChallenges={expiredChallenges}
        setExpiredChallenges={setExpiredChallenges}
      />
      <AvailableChallenges
        setCurrentChallenges={setCurrentChallenges}
        fetchUserChallenges={fetchUserChallenges}
      />
      <ChallengeForm />
      <ChallengePointsList />
      <Donate />
    </div>
  );
}

export default Dashboard;
