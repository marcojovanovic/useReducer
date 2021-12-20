import React from 'react'

import { FeedbackContext } from './context';

function FeedbackStats() {


  const {feedback, average} = React.useContext(FeedbackContext);


  return (
    <div className='feedback-stats'>
      <h4>{feedback.length}</h4>
      <h4>Average rating: { isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
