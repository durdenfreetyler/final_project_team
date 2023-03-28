import React from 'react';
import '../../scss/card.scss';

export default function Card() {
  return (
    <div className='card-container'>
      <div className='card-front'>
        <img src="https://cdn.discordapp.com/attachments/1073664859222319154/1089404175772811425/STJude2.png" className="card__image" alt="brown couch" />
        <div className="card__content">
          <time datetime="2023-03-25" className="card__date">27 März 2023</time>
          <span className="card__title">St. Jude Children's Research Hospital is a leading pediatric treatment and research facility focused on finding cures for childhood cancer and other life-threatening diseases.</span>
        </div>
      </div>
      <div className='card-front'>
        <img src="https://cdn.discordapp.com/attachments/1073664859222319154/1089404172962627674/AARCS.png" className="card__image" alt="brown couch" />
        <div className="card__content">
          <time datetime="2023-03-25" className="card__date">27 März 2023</time>
          <span className="card__title">Alberta Animal Rescue Crew Society (AARCS) is a non-profit organization dedicated to rescuing and rehabilitating abandoned and abused animals in Alberta, Canada.</span>
        </div>
      </div>
      <div className='card-front'>
        <img src="https://i.insider.com/5db9cec9dee0192a4d452053?width=700&format=jpeg&auto=webp" className="card__image" alt="brown couch" />
        <div className="card__content">
          <time datetime="2023-03-25" className="card__date">27 März 2023</time>
          <span className="card__title">Team Trees, MrBeast's tree-planting foundation, is a non-profit organization that aims to combat climate change by planting millions of trees around the world through donations and partnerships.</span>
        </div>
      </div>
    </div>
  );
}
