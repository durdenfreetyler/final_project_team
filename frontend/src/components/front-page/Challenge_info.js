import React from 'react';
import "../../scss/Challenge_info.scss"

function ChallengeArticles() {
  return (
    <section class="cards">
    <article class="card card--1">
      <div class="card__info-hover">
        <svg class="card__like"  viewBox="0 0 24 24">
        <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
    </svg>
          <div class="card__clock-info">
            <svg class="card__clock"  viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
            </svg><span class="card__time">30 days</span>
          </div>
        
      </div>
      <div class="card__img"></div>
      <a href="#" class="card_link">
         <div class="card__img--hover"></div>
       </a>
      <div class="card__info">
        <span class="card__category"> Exercise </span>
        <h3 class="card__title">30-Day Plank Challenge</h3>
        <span class="card__by">Build core strength and endurance by holding a plank for longer periods of time over 30 days. <a href="#" class="card__author" title="author">Celeste Mills</a></span>
      </div>
    </article>
      
    <article class="card card--2">
      <div class="card__info-hover">
        <svg class="card__like"  viewBox="0 0 24 24">
        <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
    </svg>
          <div class="card__clock-info">
            <svg class="card__clock"  viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
            </svg><span class="card__time">30 days</span>
          </div>
        
      </div>
      <div class="card__img"></div>
      <a href="#" class="card_link">
         <div class="card__img--hover"></div>
       </a>
      <div class="card__info">
        <span class="card__category"> Health </span>
        <h3 class="card__title">No-Sugar Challenge</h3>
        <span class="card__by">Cut out all added sugars from your diet for 30 days to improve your health and reduce cravings. <a href="#" class="card__author" title="author"></a></span>
      </div>
    </article>
    <article class="card card--3">
      <div class="card__info-hover">
        <svg class="card__like"  viewBox="0 0 24 24">
        <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
    </svg>
          <div class="card__clock-info">
            <svg class="card__clock"  viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
            </svg><span class="card__time">30 days</span>
          </div>
        
      </div>
      <div class="card__img"></div>
      <a href="#" class="card_link">
         <div class="card__img--hover"></div>
       </a>
      <div class="card__info">
        <span class="card__category"> Exercise </span>
        <h3 class="card__title">10,000 Steps Challenge</h3>
        <span class="card__by">Get more active by aiming to walk 10,000 steps per day for 30 days. by just like Rocky! <a href="#" class="card__author" title="author">Jackymomo</a></span>
      </div>
    </article>
    <article class="card card--4">
      <div class="card__info-hover">
        <svg class="card__like"  viewBox="0 0 24 24">
        <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
    </svg>
          <div class="card__clock-info">
            <svg class="card__clock"  viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
            </svg><span class="card__time">30 days</span>
          </div>
        
      </div>
      <div class="card__img"></div>
      <a href="#" class="card_link">
         <div class="card__img--hover"></div>
       </a>
      <div class="card__info">
        <span class="card__category"> Health </span>
        <h3 class="card__title">Meditation Challenge</h3>
        <span class="card__by">Develop a daily meditation practice over 30 days to reduce stress and improve mental clarity. <a href="#" class="card__author" title="author">Admins</a></span>
      </div>
    </article>
    <article class="card card--5">
      <div class="card__info-hover">
        <svg class="card__like"  viewBox="0 0 24 24">
        <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
    </svg>
          <div class="card__clock-info">
            <svg class="card__clock"  viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
            </svg><span class="card__time"> 30 days </span>
          </div>
        
      </div>
      <div class="card__img"></div>
      <a href="#" class="card_link">
         <div class="card__img--hover"></div>
       </a>
      <div class="card__info">
        <span class="card__category"> Exercise </span>
        <h3 class="card__title">30-Day Yoga Challenge</h3>
        <span class="card__by"> Improve your flexibility and mindfulness by practicing yoga for 30 days straight. <a href="#" class="card__author" title="author">Admins</a></span>
      </div>
    </article>  
      </section>
  );
}

export default ChallengeArticles;
