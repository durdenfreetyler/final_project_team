import React, { useState, useEffect } from "react";
import "../../scss/challenge.scss";
import axios from "axios";
import Slider from "react-slick";
import NavBar from "../front-page/NavBar";
import Header from "../DashBoard/Header";

function ChallengeForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(1);
  const [expirationDate, setExpirationDate] = useState("");
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    //console.log("challenges", challenges);
  }, [challenges]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const options = { month: "numeric", day: "numeric", year: "numeric" };
    const formattedDate = new Date(expirationDate).toLocaleDateString(
      "en-US",
      options
    );
    const newChallenge = {
      title,
      description,
      points,
      expiration_date: formattedDate,
      created_by: 1, // replace with the actual user id
    };
    try {
      const response = await axios.post(
        "http://localhost:3001/challenge",
        newChallenge,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("New challenge created:", response.data);

      console.log("Challenges before:", challenges);
      setChallenges([...challenges, response.data]);
      console.log("Challenges after:", challenges);

      setTitle("");
      setDescription("");
      setPoints(1);
      setExpirationDate("");

      //console.log("challenges", challenges);
      //console.log("response", response)
      //console.log("challenges", challenges);
      //console.log("response", response);
      props.fetchAvailableChallenges();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios({
        baseURL: `http://localhost:3001/challenge`,
        url: `/${id}`,
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      const updatedChallenges = challenges.filter(
        (challenge) => challenge.id !== id
      );
      setChallenges(updatedChallenges);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-background">
      <NavBar/>
      <form className="create" onSubmit={handleSubmit}>
      <h1>Create your Challenge here</h1>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <label>
          Points:
          <input
            type="number"
            min="1"
            max="5"
            value={points}
            onChange={(event) => setPoints(event.target.value)}
          />
        </label>
        <label>
          Challenge To Be Completed By:
          <input
            type="datetime-local"
            value={expirationDate}
            onChange={(event) => setExpirationDate(event.target.value + ":00")}
          />
        </label>
        <button type="submit">Create Challenge</button>
      </form>
    <Slider>

      {challenges.map((challenge) => (
        <div className="cardsss" key={challenge.id}>
          <h2>{challenge.title}</h2>
          <p>{challenge.description}</p>
          <p>Points: {challenge.points}</p>
          <p>Expiration Date: {challenge.expiration_date}</p>
          <button onClick={() => handleDelete(challenge.id)}>Delete</button>
        </div>
      ))}
      </Slider>
    </div>
  );
}

export default ChallengeForm;
