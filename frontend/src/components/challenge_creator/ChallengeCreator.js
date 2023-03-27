import React, { useState, useEffect } from "react";
// import "../../scss/challenge.scss";
import axios from "axios";

function ChallengeForm() {
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
      setChallenges([...challenges, response.data]);
      setTitle("");
      setDescription("");
      setPoints(1);
      setExpirationDate("");

      //console.log("challenges", challenges);
      //console.log("response", response)
      //console.log("challenges", challenges);
      //console.log("response", response);

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
    <div>
      <form onSubmit={handleSubmit}>
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

      {challenges.map((challenge) => (
        <div className="card" key={challenge.id}>
          <h2>{challenge.title}</h2>
          <p>{challenge.description}</p>
          <p>Points: {challenge.points}</p>
          <p>Expiration Date: {challenge.expiration_date}</p>
          <button onClick={() => handleDelete(challenge.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ChallengeForm;
