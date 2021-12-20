import React from 'react'
import Card from './shared/Card'

import { FeedbackContext } from './context';

function FeedbackForm() {

  const {text, handleTextChange} = React.useContext(FeedbackContext);

  return (
    <Card>
      <form>

      <h2>How would you rate your service with us ?</h2>

        <div className='input-group'>
          
          <input type='text' placeholder='write a review' onChange={handleTextChange}  value={text}/>
          <button type='submit'>Send</button>

        </div>      

      </form>
    </Card>
  )
}

export default FeedbackForm
