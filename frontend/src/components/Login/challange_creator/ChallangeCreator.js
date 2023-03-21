import React, { useState } from 'react';
import ChallengeCreator from './ChallangeCreator';

function createChallenge() {
  const [difficulty, setDifficulty] = useState('');
  const [timeLimit, setTimeLimit] = useState('');
  const [rewardPoints, setRewardPoints] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/create-challenge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ difficulty, timeLimit, rewardPoints })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="difficulty">Difficulty:</label>
      <input
        type="text"
        id="difficulty"
        value={difficulty}
        onChange={(event) => setDifficulty(event.target.value)}
      />

      <label htmlFor="timeLimit">Time Limit:</label>
      <input
        type="text"
        id="timeLimit"
        value={timeLimit}
        onChange={(event) => setTimeLimit(event.target.value)}
      />

      <label htmlFor="rewardPoints">Reward Points:</label>
      <input
        type="text"
        id="rewardPoints"
        value={rewardPoints}
        onChange={(event) => setRewardPoints(event.target.value)}
      />

      <button type="submit">Create Challenge</button>
    </form>
  );
}

export default ChallengeCreator;
