import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../scss/dashboard.scss"

function AvailableChallenges(props) {
  const [challenges, setChallenges] = useState([]);
  const { setCurrentChallenges } = props;

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
      setCurrentChallenges((prevChallenges) => [
        ...prevChallenges,
        challenges.find((challenge) => challenge.id === challengeId),
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get("http://localhost:3001/challenge");
        const activeChallenges = response.data.filter((challenge) => {
          const expirationDate = new Date(challenge.expiration_date);
          const currentDate = new Date();
          return expirationDate >= currentDate;
        });
        setChallenges(activeChallenges);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChallenges();
  }, []);

  return (
    <div className="challenges-box">
    <div className="challenges-grid">
      {challenges.map((challenge) => (
        <div className="challenge" key={challenge.id}>
          <h3>{challenge.title}</h3>
          <p>{challenge.description}</p>
          <p>Points: {challenge.points}</p>
          <button className="button" onClick={() => joinChallenge(challenge.id)}>
            Join Challenge
          </button>
        </div>
      ))}
    </div>
  </div>
  );
}

export default AvailableChallenges;