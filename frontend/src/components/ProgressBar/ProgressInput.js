import React from 'react'

export const ProgressInput = ({type, increase, addAmount, placeholder}) => {
  return (
    <input type={type} value={increase} onChange={addAmount} className='progress-bar' placeholder={placeholder} />
  )
}
