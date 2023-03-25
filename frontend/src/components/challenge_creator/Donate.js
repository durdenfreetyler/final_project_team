import { useState } from "react";
import axios from "axios";

function Donate({ userChallengeId }) {
  const [selectedCharity, setSelectedCharity] = useState(null);
  const [donationAmount, setDonationAmount] = useState(10);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a request to insert the donation record to the database
      const response = await axios.post("/donations", {
        user_challenge_id: userChallengeId,
        charity_id: selectedCharity.id,
        amount: donationAmount,
      });

      console.log(response.data); // success message or error message from server
    } catch (error) {
      console.error(error);
    }
  };

  const handleCharitySelect = (charity) => {
    setSelectedCharity(charity);
  };

  return (
    <div>
      <h2>Donate to a charity</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="charity">Select a charity:</label>
        <select
          name="charity"
          id="charity"
          onChange={(e) => handleCharitySelect(JSON.parse(e.target.value))}
        >
          <option value="">-- Please select --</option>
          <option value='{"id":1,"name":"Charity A","description":"Charity A description","website":"http://charity-a.org","logo_url":"http://charity-a.org/logo.png"}'>
            Charity A
          </option>
          <option value='{"id":2,"name":"Charity B","description":"Charity B description","website":"http://charity-b.org","logo_url":"http://charity-b.org/logo.png"}'>
            Charity B
          </option>
          <option value='{"id":3,"name":"Charity C","description":"Charity C description","website":"http://charity-c.org","logo_url":"http://charity-c.org/logo.png"}'>
            Charity C
          </option>
        </select>
        <br />
        <label htmlFor="donationAmount">Donation amount:</label>
        <input
          type="number"
          name="donationAmount"
          id="donationAmount"
          value={donationAmount}
          onChange={(e) => setDonationAmount(parseInt(e.target.value))}
        />
        <br />
        <button type="submit">Donate</button>
      </form>
    </div>
  );
}

export default Donate;
