import React from 'react'
import './TypingChallenge.css'

const TypingChallenge = ({selectedParagraph}) => {
  return (
    <div className='typing-challenge'>
        <div className="timer-container">
            <p className="timer">00.60</p>
            <p className="timer-info">Start typing to start the test </p>
        </div>
        <div className="text-area-container">
            <div className="text-area-left">
                <div className="text-area test-paragrph">
                    {selectedParagraph}    
                </div>    
            </div>
            <div className="text-area-right">
                <textarea 
                className='textarea'
                placeholder='Start Typing Here'></textarea>    
            </div>    
        </div>
    </div>
  )
}

export default TypingChallenge