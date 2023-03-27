import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../scss/challenge.scss'
import ProgressCard from "../ProgressBar/ProgressCard";
import Card from "../front-page/cards";
import ClearButton from "../Buttons/Clear-Button";
import DeleteButton from "../Buttons/Delete-Button";

function ChallengeList(props) {
  const { userId } = props;
  const [currentChallenges, setCurrentChallenges] = useState([]);
  const [expiredChallenges, setExpiredChallenges] = useState([]);

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
        setCurrentChallenges(active);
        setExpiredChallenges(expired);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [userId]);

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
        (challenge) => challenge.id !== id
      );
      setExpiredChallenges(newExpired);
      const newCurrent = currentChallenges.filter(
        (challenge) => challenge.id !== id
      );
      setCurrentChallenges(newCurrent);
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
              <DeleteButton onClick={() => handleDelete(challenge.id)}/>
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
              <DeleteButton onClick={() => handleDelete(challenge.id)}/>
            </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default ChallengeList;