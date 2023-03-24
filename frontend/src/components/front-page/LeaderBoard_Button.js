// import React, { useState } from 'react';
// import '../../scss/leader_button.scss'

// function LeaderboardButton() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleLeaderboard = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="container">
//       <button className="button" onClick={toggleLeaderboard}>
//         <div className="button__line"></div>
//         <div className="button__line"></div>
//         <span className="button__text">ENTRY</span>
//         <div className="button__drow1"></div>
//         <div className="button__drow2"></div>
//       </button>
//       {isOpen && (
//         <div className="leaderboard">
//           {/* Leaderboard content goes here */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default LeaderboardButton;