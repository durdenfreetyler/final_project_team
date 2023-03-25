import React from 'react';
import '../../scss/card.scss';

export default function Card() {
  return (
    <div className='card-container'>
      <div className='card-front'>
        <img src="https://images.unsplash.com/photo-1615147342761-9238e15d8b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" className="card__image" alt="brown couch" />
        <div className="card__content">
          <time datetime="2023-03-25" className="card__date">25 März 2023</time>
          <span className="card__title">Duis autem vel eum iriure dolor in hend in vulputate</span>
        </div>
      </div>
      <div className='card-front'>
        <img src="https://images.unsplash.com/photo-1615147342761-9238e15d8b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" className="card__image" alt="brown couch" />
        <div className="card__content">
          <time datetime="2023-03-25" className="card__date">25 März 2023</time>
          <span className="card__title">Duis autem vel eum iriure dolor in hend in vulputate</span>
        </div>
      </div>
      <div className='card-front'>
        <img src="https://images.unsplash.com/photo-1615147342761-9238e15d8b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" className="card__image" alt="brown couch" />
        <div className="card__content">
          <time datetime="2023-03-25" className="card__date">25 März 2023</time>
          <span className="card__title">Duis autem vel eum iriure dolor in hend in vulputate</span>
        </div>
      </div>
    </div>
  );
}
