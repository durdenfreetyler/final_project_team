import React, { useState, useEffect } from "react";
import axios from "axios";
<<<<<<< HEAD
import ProgressCard from "../ProgressBar/ProgressCard";
import { JoinChallenge } from "./JoinChallenge";

=======
import { JoinChallenge } from "./JoinChallenge";
>>>>>>> b4c349a4ea1175123d88324dc1cc9a1a2b0673a0

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
<<<<<<< HEAD
  /*
  const handleJoinChallenge = (newChallenge) => {
    setCurrentChallenges((prevChallenges) => [...prevChallenges, newChallenge]);
  };

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
*/ 
// I am not a 100% sure this code is needed  here we have the same code in AvailableChallenges


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/user_challenge`,
          { withCredentials: true }
        );
        const challenges = response.data;
        const currentDate = new Date().getTime();
        const expired = [];
        const active = [];
        challenges.forEach((challenge) => {
          //console.log("challenge", challenge);
          if (
            currentDate >=
            new Date(challenge.expiration_date.toString()).getTime()
          ) {
            expired.push(challenge);
          } else {
            active.push(challenge);
          }
        });
        // console.log("in useEffect")
        // console.log('active challenges', active)
        // console.log('current challenges', currentChallenges)
        setCurrentChallenges([...active]);
        setExpiredChallenges([...expired]);
      } catch (error) {
        console.error(error.message);
      }
    };
    
    fetchData();
  }, [userId]);
  //console.log(expiredChallenges);
  //console.log(currentChallenges);
=======
>>>>>>> b4c349a4ea1175123d88324dc1cc9a1a2b0673a0

  const handleJoinChallenge = (newChallenge) => {
    setCurrentChallenges((prevChallenges) => [...prevChallenges, newChallenge]);
  };

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

  useEffect(() => {
    fetchUserChallenges();
  }, []);

  return (
    <div>
      <h2>Current Challenges</h2>
      {currentChallenges.map((challenge) => (
        <div className="card" key={challenge.id}>
          <h3>{challenge.title}</h3>
          <p>{challenge.description}</p>
          <p>Points: {challenge.points}</p>
          <p>Expiration Date: {challenge.expiration_date}</p>
<<<<<<< HEAD
          <button onClick={() => handleDelete(challenge.challenge_id)}>Delete</button>
=======
>>>>>>> b4c349a4ea1175123d88324dc1cc9a1a2b0673a0
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
<<<<<<< HEAD
          <button onClick={() => handleDelete(challenge.challenge_id)}>Delete</button>
=======
>>>>>>> b4c349a4ea1175123d88324dc1cc9a1a2b0673a0
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
<<<<<<< HEAD
            )}  
=======
          )}
>>>>>>> b4c349a4ea1175123d88324dc1cc9a1a2b0673a0
        </div>
      ))}
    </div>
  );
}

export default ChallengeList;
