import React from 'react';
import '../../scss/Buttons.scss'


export default function DeleteButton({type, onClick, click}) {
  return (
    <div class="buttons">
  <div class="container">
      <a onClick={onClick} class="btns effect04" data-sm-link-text="CLICK" target="_blank"><span>DELETE</span></a>
  </div>
</div>
  );
}

