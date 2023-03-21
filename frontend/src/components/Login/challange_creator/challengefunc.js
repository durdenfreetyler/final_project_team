// api.js
function ChallengeCreator() {
  const [difficulty, setDifficulty] = useState('');
  const [timeLimit, setTimeLimit] = useState('');
  const [rewardPoints, setRewardPoints] = useState('');

  const createChallenge = async (data) => {
    try {
      const response = await fetch('/api/challenges', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { difficulty, timeLimit, rewardPoints };
      const response = await createChallenge(data);
      console.log(response); // handle successful response
    } catch (error) {
      console.error(error); // handle error
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* form inputs */}
        <button type="submit">Create Challenge</button>
      </form>
    </div>
  );
}


export default ChallengeCreator;
