import React from 'react';
import '../../scss/leaderboard.scss';

function Leaderboard() {
  return (
    <div className="leaderboard">
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M471.988 98.013c-26.036-26.036-68.214-26.036-94.25 0L256 256 134.262 134.262c-26.036-26.036-68.214-26.036-94.25 0C9.372 124.049 0 145.029 0 167.984v176.032c0 22.956 9.372 43.936 40.012 74.576C70.652 463.628 91.632 473 114.588 473h282.824c22.956 0 43.936-9.372 74.576-40.012C502.628 388.952 512 367.972 512 345.016V167.984c0-22.955-9.372-43.935-40.012-74.571zM464 345.016c0 11.03-4.436 20.206-13.99 29.758-9.552 9.554-18.728 13.99-29.758 13.99H114.588c-11.03 0-20.206-4.436-29.758-13.99-9.554-9.552-13.99-18.728-13.99-29.758V167.984c0-11.03 4.436-20.206 13.99-29.758 9.552-9.554 18.728-13.99 29.758-13.99h282.824c11.03 0 20.206 4.436 29.758 13.99 9.554 9.552 13.99 18.728 13.99 29.758v177.032z"/>
        </svg>
        Leaderboard
      </h1>
      <ol>
        <li>
          <mark>Jack Robinson</mark>
          <small>1024 PT's</small>
        </li>
        <li>
          <mark>Abe Rodgers</mark>
          <small>768 PT's</small>
        </li>
        <li>
          <mark>Andrii grynik </mark>
          <small>512 PT's</small>
        </li>
        <li>
          <mark>Alice Johnson</mark>
          <small>256 PT's</small>
        </li>
      </ol>
    </div>
  );
}

export default Leaderboard;
