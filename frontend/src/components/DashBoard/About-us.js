import React from 'react';
import '../../scss/aboutus.scss'
import NavBar from '../front-page/NavBar';


function AboutUs () {
  return (
    <div className='about-us'>
    <NavBar/>
    <div class="backgrounds"></div>
<div class="woolf"></div>

<div class="content-container">
	<div class="contents">

		<h2>Our App</h2>
		<hr></hr>
		<h2>by Jack, Andrii, & Abe </h2>

		{/* <h3>An Excerpt from Chapter One</h3> */}

		<p className='about-us-p'><span>H</span>ey there, I'm excited to tell you about my challenge app!</p>

		<p className='about-us-p'>This website is a place where you can create challenges 
    for yourself or participate in challenges created by others. Each challenge comes with a set of 
    tasks that you must complete within a specific timeframe. The best part? </p>

		<p className='about-us-p'>You can earn points for completing challenges and redeem them for awesome rewards! But, 
    if you don't complete the challenge, money will be deducted from your account and donated to a charityof your choice.
    As someone who loves a good challenge, I know how motivating it can be to set goals and push yourself to accomplish them. With my challenge app,
     you can challenge yourself in a fun and exciting way, all while giving back to your community. It's a win-win! Plus, the donation feature really adds a unique twist to the app. 
     It's a great way to stay accountable and motivated, knowing that 
    your failure to complete a challenge will still result in a positive impact on the world.</p >

		<p className='about-us-p'>SI think the challenge app is perfect for anyone who loves goal-setting 
    and wants to make a difference. It's a great way to challenge yourself, have fun, 
    and support a good cause all at the same time. I hope you'll check it out and join in on the fun!</p>

	</div>
</div>
    </div>

  );
};

export default AboutUs;
