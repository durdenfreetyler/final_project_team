import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../scss/challenge.scss'
import ProgressCard from "../ProgressBar/ProgressCard";

import { JoinChallenge } from "./JoinChallenge";

// import { JoinChallenge } from "./JoinChallenge";



=======
import Card from "../front-page/cards";
import ClearButton from "../Buttons/Clear-Button";
import DeleteButton from "../Buttons/Delete-Button";
>>>>>>> a7014f509ce638189d347b8fe35967dfb585b9a9

function ChallengeList(props) {
  const { userId } = props;
  const [currentChallenges, setCurrentChallenges] = useState([]);
  const [expiredChallenges, setExpiredChallenges] = useState([]);


  const handleChallengeCheckIn = async (challengeId) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/user_challenge/${challengeId}`,
        { is_completed: true, completed_before_expiration: true },
        { withCredentials: true }
      );
      const updatedChallenge = response.data;
      // Remove the updated challenge from the currentChallenges array
      setCurrentChallenges((prevChallenges) =>
        prevChallenges.filter((challenge) => challenge.id !== challengeId)
      );

      // Add the updated challenge to the expiredChallenges array
      setExpiredChallenges((prevChallenges) => [
        ...prevChallenges,
        updatedChallenge,
        // {
        //   ...currentChallenges.find(
        //     (challenge) => challenge.id === challengeId
        //   ),
        //   is_completed: true,
        // },
      ]);

      console.log("response", response);
    } catch (error) {
      console.error(error.message);
    }
  };
  console.log("expiredChallenges", expiredChallenges);


  /*
  const handleJoinChallenge = (newChallenge) => {
    setCurrentChallenges((prevChallenges) => [...prevChallenges, newChallenge]);
  };

  // const handleJoinChallenge = (newChallenge) => {
  //   setCurrentChallenges((prevChallenges) => [...prevChallenges, newChallenge]);
  // };


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
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    style: {
      margin: "0 auto",
      width: "35%",
    },
  };





  return (
   
    <div className="lols">
      {currentChallenges.length > 0 && (
        <Slider {...settings}>
          {currentChallenges.map((challenge) => (
            <div className="challenge-card" key={challenge.id}>
              <h3>
                <ProgressCard />
              </h3>
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
              <p>Points: {challenge.points}</p>
              <p>Expiration Date: {challenge.expiration_date}</p>
              <div>
              <DeleteButton onClick={() => handleDelete(challenge.challenge_id)}/>
              <button onClick={() => handleChallengeCheckIn(challenge.id)}>
               Mark Completed
              </button>
            </div>
            </div>
          ))}
        </Slider>
       )} 
      <h2></h2>
      {expiredChallenges.length > 0 && (
        <Slider {...settings}>
          {expiredChallenges.map((challenge) => (
            <div className="challenge-card" key={challenge.id}>
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
              <p>Points: {challenge.points}</p>
              <p>Expiration Date: {challenge.expiration_date}</p>
            <div>
              <DeleteButton onClick={() => handleDelete(challenge.challenge_id)}/>
              {challenge.completed_before_expiration ? (
                  <p>
                    Completed, not need to donate.
                  </p>
                ) : (
                  <p>
                    Did not Complete and Donated
                  </p>
              )}
            </div>
            </div>
          ))}
        </Slider>
      )}

    </div>
  );
}

export default ChallengeList;