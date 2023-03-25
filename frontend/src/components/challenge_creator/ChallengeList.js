import React, { useState, useEffect } from "react";
import axios from "axios";

function ChallengeList(props) {
  const { userId } = props;
  const [currentChallenges, setCurrentChallenges] = useState([]);
  const [expiredChallenges, setExpiredChallenges] = useState([]);

  const handleChallengeCheckIn = async (challengeId) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/user_challenge/${challengeId}`,
        { is_completed: true },
        { withCredentials: true }
      );
      const updatedChallenge = response.data.data;

      // Remove the updated challenge from the currentChallenges array
      setCurrentChallenges((prevChallenges) =>
        prevChallenges.filter((challenge) => challenge.id !== challengeId)
      );

      // Add the updated challenge to the expiredChallenges array
      setExpiredChallenges((prevChallenges) => [
        ...prevChallenges,
        {
          ...currentChallenges.find(
            (challenge) => challenge.id === challengeId
          ),
          is_completed: true,
        },
      ]);

      console.log("response", response);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/user_challenge`,
          { withCredentials: true }
        );
        const challenges = response.data;
        const currentDate = new Date().getTime();
        const expired = challenges.filter(
          (challenge) =>
            currentDate >=
            new Date(challenge.expiration_date.toString()).getTime()
        );
        for (const challenge of expired) {
          const userChallenge = await axios.get(
            `http://localhost:3001/user_challenge?user_id=${userId}&challenge_id=${challenge.id}`,
            { withCredentials: true }
          );
          challenge.completed_before_expiration =
            userChallenge.data[0].completed_before_expiration; // updated
        }
        const active = challenges.filter(
          (challenge) =>
            currentDate <
            new Date(challenge.expiration_date.toString()).getTime()
        );
        setCurrentChallenges(active);
        setExpiredChallenges(expired);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [userId]);
  // console.log(expiredChallenges);
  // console.log(currentChallenges);
  return (
    <div>
      <h2>Current Challenges</h2>
      {currentChallenges.map((challenge) => (
        <div className="card" key={challenge.id}>
          <h3>{challenge.title}</h3>
          <p>{challenge.description}</p>
          <p>Points: {challenge.points}</p>
          <p>Expiration Date: {challenge.expiration_date}</p>
          <button onClick={() => handleChallengeCheckIn(challenge.id)}>
            Mark Completed
          </button>
        </div>
      ))}

      <h2>Expired Challenges</h2>
      {expiredChallenges.map((challenge) => (
        <div className="card" key={challenge.id}>
          <h3>{challenge.title}</h3>
          <p>{challenge.description}</p>
          <p>Points: {challenge.points}</p>
          <p>Expiration Date: {challenge.expiration_date}</p>
          {challenge.completed_before_expiration ? (
            <p>
              Player completed challenge before expiration and did not to
              charity
            </p>
          ) : (
            <p>
              Player did not complete challenge before expiration and donated to
              charity
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default ChallengeList;
