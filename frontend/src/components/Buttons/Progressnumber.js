import React from 'react';



export default function ProgressnNumber({type, increase, addAmount, placeholder}) {
  return (
    <div>
<span class="input" type={type} value={increase} onChange={addAmount} >
<input type="text" placeholder="Your Progress"></input>
<span></span>	
</span>
  </div>
  );
}