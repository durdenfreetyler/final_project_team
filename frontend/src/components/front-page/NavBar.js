import React from 'react';
import '../../scss/navbar.scss'


export default function NavBar({type, onClick, click}) {
  return (
    <div>
    <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label for="menu-icon"></label>
  	<nav class="nav"> 		
  		<ul class="pt-5">
  			<li><a href="#">Account</a></li>
  			<li><a href="#">Create</a></li>
  			<li><a href="#">News</a></li>
  			<li><a href="#">Contact</a></li>
  		</ul>
  	</nav>
    </div>
  );
}