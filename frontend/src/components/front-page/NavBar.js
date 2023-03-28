import React from 'react';
import '../../scss/navbar.scss'


export default function NavBar({type, onClick, click}) {
  return (
    <div>
    <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label for="menu-icon"></label>
  	<nav class="nav"> 		
  		<ul class="pt-5">
  			<li><a href="/">Home</a></li>
  			<li><a href="/account">Account</a></li>
  			<li><a href="/dashboard">About</a></li>
  			<li><a href="/create-challenge">Create</a></li>
        <li><a href="/Login">Login</a></li>
  		</ul>
  	</nav>
    </div>
  );
}