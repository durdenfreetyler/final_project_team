import React from 'react';
import '../../scss/Buttons.scss'


export default function ClearButton({type, onClick, click}) {
  return (
   <div className='complete-button'>

    <a class="bt more-bt" onClick={onClick}>
    <span class="fl"></span><span class="sfl"></span><span class="cross"></span><i></i>
    <p>
    Complete!
    </p>
  </a> 
    </div>
  );
}