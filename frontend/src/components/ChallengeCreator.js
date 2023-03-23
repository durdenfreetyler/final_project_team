import React, { useState } from "react";
import "./challenge.scss";
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
        //Hi Abe, this is Rohit. I want to try out a few things. Let get on to a call. I will send the Link for Google meet
        //Ok. No worries. I am sending a link to what you should try out
        //https://devpress.csdn.net/react/6304dabb7e6682346619cf13.html
        //go down and try out! Best of luck. OK sounds good!
        //Thank you, we will try it out and will call in if any further assistance needed.
        // I am not sure if abe is here, he was talking about getting on the personal call like 5 mins ago
      );
      setChallenges([...challenges, response.data]);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error(error.message);
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
