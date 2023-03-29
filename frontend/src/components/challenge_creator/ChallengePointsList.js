import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../scss/leaderboard.scss";

function ChallengePointsList() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [scrollable, setScrollable] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users_with_points`, {
        withCredentials: true,
      })
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
    <div className="leaderboard"
    style={{ overflowY: scrollable ? "scroll" : "hidden", height: "400px" }}>
      <table className="points-table">
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M471.988 98.013c-26.036-26.036-68.214-26.036-94.25 0L256 256 134.262 134.262c-26.036-26.036-68.214-26.036-94.25 0C9.372 124.049 0 145.029 0 167.984v176.032c0 22.956 9.372 43.936 40.012 74.576C70.652 463.628 91.632 473 114.588 473h282.824c22.956 0 43.936-9.372 74.576-40.012C502.628 388.952 512 367.972 512 345.016V167.984c0-22.955-9.372-43.935-40.012-74.571zM464 345.016c0 11.03-4.436 20.206-13.99 29.758-9.552 9.554-18.728 13.99-29.758 13.99H114.588c-11.03 0-20.206-4.436-29.758-13.99-9.554-9.552-13.99-18.728-13.99-29.758V167.984c0-11.03 4.436-20.206 13.99-29.758 9.552-9.554 18.728-13.99 29.758-13.99h282.824c11.03 0 20.206 4.436 29.758 13.99 9.554 9.552 13.99 18.728 13.99 29.758v177.032z"/>
        </svg>
        Leaderboard
      </h1>
        <ol>
          <li>
        <thead>
        <tr className="dropdown-Points">
            <th>Player</th>
            <th>Created Date</th>
            <th>Challenge Points</th>
          </tr>
        </thead>
          </li>
        </ol>
        <ol>
          <li>
        <tbody>
          {users.map((user) => (
            
            <tr 
              key={user.id}
              className={user.id === currentUser.id ? "selected-user" : ""}
              onClick={() => handleUserClick(user)}
            >
              <td>{`${user.first_name} ${user.last_name}`}</td>           
              <small><td>{user.created_date}</td> </small>         
              <td className="points">{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
          </li>
        </ol>
      </table>
    </div>
  );
}

export default ChallengePointsList;
