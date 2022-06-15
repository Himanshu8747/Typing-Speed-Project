import React from 'react'
// import TryAgain from '../TryAgain/TryAgain'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer'
import './TestContainer.css'

const TestContainer = ({words,characters,wpm,startAgain}) => {
  return (
    <div className='test-container'>
      <div data-aos="fade-up" className="typing-challenge-container">
          <TypingChallengeContainer words={words} characters={characters} wpm={wpm}/>
      </div>
        {/* <div className="try-again-container">
            <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain}/>
        </div> */}
        
    </div>
  )
}

export default TestContainer