import React, { useState, useEffect } from "react";
import axios from "axios";
import ProgressCard from "../ProgressBar/ProgressCard";
import { JoinChallenge } from "./JoinChallenge";


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


  const handleDelete = async (id) => {
    //console.log("Clicked");
   //console.log("challenges", challenges);
    try {
      await axios({
        baseURL: `http://localhost:3001/challenge`,
        url: `/${id}`,
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      const newExpired = expiredChallenges.filter(
        (challenge) => challenge.challenge_id !== id
      );
      //console.log('new expired', newExpired)
      setExpiredChallenges(newExpired);
      const newCurrent = currentChallenges.filter(
        (challenge) => challenge.challenge_id !== id
      );
      //console.log('new Current', newCurrent)
      setCurrentChallenges(newCurrent);
      //console.log('current challenges', currentChallenges)
    } catch (error) {
      console.error(error);
    }
    
  };


  return (
    <div>
      <h2>Current Challenges</h2>
      {currentChallenges.map((challenge) => (
        <div className="card" key={challenge.id}>
          <h3><ProgressCard/></h3>
          <h3>{challenge.title}</h3>
          <p>{challenge.description}</p>
          <p>Points: {challenge.points}</p>
          <p>Expiration Date: {challenge.expiration_date}</p>
          <button onClick={() => handleDelete(challenge.challenge_id)}>Delete</button>
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
          <button onClick={() => handleDelete(challenge.challenge_id)}>Delete</button>
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