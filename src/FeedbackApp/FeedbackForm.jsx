import React, {useEffect} from 'react'
import Card from './shared/Card'

import { FeedbackContext } from './context';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {

  const {text, handleTextChange, btnDisabled, setBtnDisabled, setText, message, handleSubmit, feedbackEdit, setRating} = React.useContext(FeedbackContext);


  useEffect(()=>{

    if(feedbackEdit.edit === true){

      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)

    }


  },[feedbackEdit])

  return (
    <Card>
      <form onSubmit={handleSubmit}>

      <h2>How would you rate your service with us ?</h2>

      <RatingSelect />

        <div className='input-group'>
          
          <input type='text' placeholder='write a review' onChange={handleTextChange}  value={text}/>
         <Button version='secondary' isDisabled={btnDisabled}>
           Send
         </Button>

        </div>      

      {message && <div className='message'>{message}</div>}

      </form>
    </Card>
  )
}

export default FeedbackForm
