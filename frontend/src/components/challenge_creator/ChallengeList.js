import React, { useState, useEffect } from "react";
import axios from "axios";
// import { JoinChallenge } from "./JoinChallenge";
import DeleteButton from "../Buttons/Delete-Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../scss/challenge.scss";
import ProgressCard from "../ProgressBar/ProgressCard";
import AddButton from "../Buttons/Add-button";
import ClearButton from "../Buttons/Clear-button";

function ChallengeList(props) {
  const {
    userId,
    fetchUserChallenges,
    setExpiredChallenges,
    setCurrentChallenges,
    currentChallenges,
    expiredChallenges,
  } = props;
  // const [currentChallenges, setCurrentChallenges] = useState([]);
  // const [expiredChallenges, setExpiredChallenges] = useState([]);

  const handleChallengeCheckIn = async (challengeId) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/user_challenge/${challengeId}`,
        { is_completed: true, completed_before_expiration: true },
        { withCredentials: true }
      );
      const completedChallenge = currentChallenges.find(
        (challenge) => challenge.id === challengeId
      );
      const updatedChallenge = response.data;
      // Remove the updated challenge from the currentChallenges array
      setCurrentChallenges((prevChallenges) =>
        prevChallenges.filter((challenge) => challenge.id !== challengeId)
      );

      // Add the updated challenge to the expiredChallenges array
      setExpiredChallenges((prevChallenges) => [
        ...prevChallenges,
        {
          ...completedChallenge,
          is_completed: true,
          completed_before_expiration: true,
        },
      ]);

      // console.log("response", response);
    } catch (error) {
      console.error(error.message);
    }
  };

  // const fetchUserChallenges = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:3001/user_challenge`, {
  //       withCredentials: true,
  //     });
  //     const challenges = response.data;
  //     const currentDate = new Date().getTime();
  //     const expired = challenges.filter(
  //       (challenge) =>
  //         currentDate >=
  //         new Date(challenge.expiration_date.toString()).getTime()
  //     );
  //     const active = challenges.filter(
  //       (challenge) =>
  //         currentDate < new Date(challenge.expiration_date.toString()).getTime()
  //     );
  //     setCurrentChallenges(active);
  //     setExpiredChallenges(expired);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  useEffect(() => {
    fetchUserChallenges();
  }, []);
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
      <Slider {...settings}>
        {currentChallenges.map((challenge) => (
          <div className="challenge-card" key={challenge.id}>
            <div>
              <ProgressCard />
            </div>
            <h3>{challenge.title}</h3>
            <p>{challenge.description}</p>
            <p>Points: {challenge.points}</p>
            <p>Expiration Date: {challenge.expiration_date}</p>
            <DeleteButton
              onClick={() => handleDelete(challenge.challenge_id)}
            />
            <ClearButton onClick={() => handleChallengeCheckIn(challenge.id)} />
          </div>
        ))}
      </Slider>
      <Slider {...settings}>
        {expiredChallenges.map((challenge) => (
          <div className="challenge-card" key={challenge.id}>
            <h3>{challenge.title}</h3>
            <p>{challenge.description}</p>
            <p>Points: {challenge.points}</p>
            <p>Expiration Date: {challenge.expiration_date}</p>
            <DeleteButton
              onClick={() => handleDelete(challenge.challenge_id)}
            />
            {challenge.completed_before_expiration ? (
              <p>
                Player completed challenge before expiration and did not donate
                to charity
              </p>
            ) : (
              <p>
                Player did not complete challenge before expiration and donated
                to charity
              </p>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ChallengeList;
