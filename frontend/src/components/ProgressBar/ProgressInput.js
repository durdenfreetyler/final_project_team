import React from 'react'

export const ProgressInput = ({type, increase, addAmount, placeholder}) => {
  return (
    <input type={type} value={increase} onChange={addAmount} 
    className='border-2 w-full text-red-800 px-2' placeholder={placeholder} />
  )
}
