import React from 'react'
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard'
import './TypingChallengeContainer.css'

const TypingChallenge = ({words,characters,wpm}) => {
  return (
    <div className='typing-challenge-container'>
        {/* details section */}
        <div className="details-container">
                {/*words typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={words}/>
                {/* characters typed */}
                <ChallengeDetailsCard cardName="Characters" cardValue={characters}/>
                {/* wpm */}
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm}/>
        </div>
        {/* challenge section */}
        <div className="typewriter-container">
            <TypingChallenge selectedParagraph="Hello Bitch"/>
        </div>
    </div>
  )
}

export default TypingChallenge