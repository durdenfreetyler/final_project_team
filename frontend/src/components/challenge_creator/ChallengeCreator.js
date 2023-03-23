import React, { useState } from "react";
import "../../scss/challenge.scss";
import axios from "axios";

function ChallengeForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [challenges, setChallenges] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newChallenge = {
      title,
      description,
      created_by: 1, // replace 1 with the actual user ID
    };
    try {
      const response = await axios.post(
        "http://localhost:3001/challenge",
        newChallenge
      );
      setChallenges([...challenges, response.data]);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/challenge/${id}`);
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
        <button type="submit">Create Challenge</button>
      </form>

      {challenges.map((challenge) => (
        <div className="card" key={challenge.id}>
          <h2>{challenge.title}</h2>
          <p>{challenge.description}</p>
          <button onClick={() => handleDelete(challenge.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ChallengeForm;
