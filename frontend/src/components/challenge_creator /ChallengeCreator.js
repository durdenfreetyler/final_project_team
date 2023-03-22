import React, { useState } from "react";
import "../../scss/challenge.scss";

function ChallengeForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [timeLimit, setTimeLimit] = useState("");
  const [rewardPoints, setRewardPoints] = useState("");
  const [challenges, setChallenges] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newChallenge = {
      title,
      description,
      difficulty,
      timeLimit,
      rewardPoints,
      id: Math.random(),
    };
    setChallenges([...challenges, newChallenge]);
    setTitle("");
    setDescription("");
    setTimeLimit("");
    setRewardPoints("");
  };

  const handleDelete = (id) => {
    const updatedChallenges = challenges.filter((challenge) => challenge.id !== id);
    setChallenges(updatedChallenges);
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
          Difficulty:
          <select value={difficulty} onChange={(event) => setDifficulty(event.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <label>
          Time Limit (in seconds):
          <input
            type="number"
            value={timeLimit}
            onChange={(event) => setTimeLimit(event.target.value)}
          />
        </label>
        <label>
          Reward Points:
          <input
            type="number"
            value={rewardPoints}
            onChange={(event) => setRewardPoints(event.target.value)}
          />
        </label>
        <button type="submit">Create Challenge</button>
      </form>

      {challenges.map((challenge) => (
        <div className="card" key={challenge.id}>
          <h2>{challenge.title}</h2>
          <p>{challenge.description}</p>
          <p>Difficulty: {challenge.difficulty}</p>
          <p>Time Limit: {challenge.timeLimit} seconds</p>
          <p>Reward Points: {challenge.rewardPoints}</p>
          <button onClick={() => handleDelete(challenge.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ChallengeForm;
