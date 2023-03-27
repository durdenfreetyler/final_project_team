import React from 'react';
import '../../scss/Buttons.scss'


export default function AddButton({type, onClick, click}) {
  return (
    <a class="bt more-bt" onClick={onClick}>
    <span class="fl"></span><span class="sfl"></span><span class="cross"></span><i></i>
    <p>{click}</p>
  </a>
  
  );
}

