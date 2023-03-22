import { useState } from "react";

export default function ChallengeForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [timeLimit, setTimeLimit] = useState(0);
  const [rewardPoints, setRewardPoints] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();

    const challengeData = {
      title,
      description,
      difficulty,
      time_limit: timeLimit,
      reward_points: rewardPoints,
    };

    // Send the challenge data to the server using a fetch request
    fetch("/challenge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(challengeData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Challenge created successfully:", data);
      })
      .catch((error) => {
        console.error("Error creating challenge:", error);
      });
  }

  return (
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
  );
}
