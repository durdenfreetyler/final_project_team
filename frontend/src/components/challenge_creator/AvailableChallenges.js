import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../scss/dashboard.scss";
import ChallengeForm from "./ChallengeCreator";

function AvailableChallenges(props) {
  // const [challenges, setChallenges] = useState([]);
  const { setCurrentChallenges, fetchUserChallenges } = props;

  const joinChallenge = async (challengeId) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/user_challenge",
        {
          challenge_id: challengeId,
        },
        { withCredentials: true }
      );
      console.log(response.data);

      // Add the newly joined challenge to the currentChallenges state array
      console.log(
        props.availableChallenges.find(
          (challenge) => challenge.id === challengeId
        )
      );

      // props.setCurrentChallenges((prevChallenges) => [
      //   ...prevChallenges,
      //   challenges.find((challenge) => challenge.id === challengeId),
      //   // user_challenge_id: response.data.updadatedChallenge[0].id}
      // ]);
      props.fetchUserChallenges();
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   fetchChallenges();
  // }, []);

  return (
    <div className="challenges-box">
      {/* <ChallengeForm
      /> */}
      <div className="challenges-grid">
        {props.availableChallenges.map((challenge) => (
          <div className="challenge" key={challenge.id}>
            <h3>{challenge.title}</h3>
            <p>{challenge.description}</p>
            <p>Points: {challenge.points}</p>
            <button
              className="button"
              onClick={() => joinChallenge(challenge.id)}
            >
              Join Challenge
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvailableChallenges;
