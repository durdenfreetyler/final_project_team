import React, {useState} from 'react'
import { Line } from 'rc-progress'
import { ProgressInput } from './ProgressInput'
import { Button } from './Button'
import AddButton from '../Buttons/Add-button'
import '../../scss/progressbar.scss'
import ProgressnNumber from '../Buttons/Progressnumber'


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

                <h2>Challenge status</h2>
                <p>{progress >= 100 ? 'All Done!' : 'You got some work to do'}</p> 
                <p>{progress}%</p> 
                <Line percent={progress} strokeWidth="4" /*strokeColor={'any'} *//>

                <form className='progress-add' onSubmit={addProgressBar}>
                 <ProgressnNumber

                  type='text'
                  increase={increase}
                  addAmount={addAmount}
                  placeholder='Add Progress'

                 />
                 <AddButton onClick={addProgressBar} type='button' click='Add'/> 
                 <AddButton type='button' onClick={clearBar} click='Clear'/> 
                </form>
          </div>
    </div>
  )
}

export default ProgressCard