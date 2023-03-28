import React from 'react';
import '../../scss/Buttons.scss'


export default function ClearButton() {
  return (
    <div className='clearbutton' >
<section id="intro">
  <div id="intro-content" class="center-content">
    <div class="center-content-inner">
      <div class="content-section content-section-margin">
        <div class="content-section-grid clearfix">   
        <a href="#" class="button nav-link">
          <div class="bottom"></div>
          <div class="top">
          <div class="label">Delete</div> 
        		<div class="button-border button-border-left"></div>
        	  <div class="button-border button-border-top"></div>
        	  <div class="button-border button-border-right"></div>
        		<div class="button-border button-border-bottom"></div>
         </div>
        	</a>
        </div>
       </div>
      </div>
     </div>
  </section>
    </div>
  );
}