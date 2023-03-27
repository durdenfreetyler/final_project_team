import React, {useState} from 'react'
import { Line } from 'rc-progress'
import { ProgressInput } from './ProgressInput'
import { Button } from './Button'


const ProgressCard = () => {

  const [increase, setIncrease] = useState(0)
  const [progress, setProgress] =useState(0)

  const addProgressBar = e => {
    e.preventDefault()
    const numAd = Number(progress) + Number(increase);
    setProgress(numAd);
    setIncrease('');
  }
  const addAmount = e => {
    setIncrease(e.target.value)
  }
  const clearBar = () => {
    setProgress(0)
  }

  return (
    <div>
          <div>

                <h1>Challenge status</h1>
                <p>{progress >= 100 ? 'All Done!' : 'You got some work to do'}</p> 
                <p>{progress}%</p> 
                <Line percent={progress} strokeWidth="4" /*strokeColor={'any'} *//>

                <form onSubmit={addProgressBar}>
                 <ProgressInput 

                  type='text'
                  increase={increase}
                  addAmount={addAmount}
                  placeholder='Add Progress'

                 />
                 <Button type='submit' click='Add'/> 
                 <Button type='button' onClick={clearBar} click='Clear'/> 
                </form>
          </div>
    </div>
  )
}

export default ProgressCard