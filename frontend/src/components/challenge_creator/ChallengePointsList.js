import React, { useState, useEffect } from "react";
import axios from "axios";

function ChallengePointsList() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [scrollable, setScrollable] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users_with_points`, {
        withCredentials: true,
      })
      //   .get(`http://localhost:3001/users`, { withCredentials: true })
      .then((response) => {
        console.log("response.data", response.data);
        setUsers(response.data);
        setCurrentUser(response.data[0]);
      });
  }, []);
  console.log(users);

  const handleUserClick = (user) => {
    setCurrentUser(user);
  };

  return (
    <div
      style={{ overflowY: scrollable ? "scroll" : "hidden", height: "200px" }}
    >
      <h2>Challenge Points List</h2>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Created Date</th>
            <th>Challenge Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              style={{
                background: user.id === currentUser.id ? "yellow" : "white",
              }}
              onClick={() => handleUserClick(user)}
            >
              <td>{`${user.first_name} ${user.last_name}`}</td>
              <td>{user.created_date}</td>
              <td style={{ textAlign: "center" }}>{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button onClick={() => setScrollable(!scrollable)}>Toggle Scroll</button> */}
    </div>
  );
}

export default ChallengePointsList;
