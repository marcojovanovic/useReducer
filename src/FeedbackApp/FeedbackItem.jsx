import React from 'react'

import { FeedbackContext } from './context';

import Card from './shared/Card';
import {FaTimes } from 'react-icons/fa'

function FeedbackItem({rating, text, id}) {

  const {handleClick, handleDelete} = React.useContext(FeedbackContext);


  return (
    <Card>

       <div className='num-display'>{rating}</div>
       <div className='text-display'>{text}</div>
      <button onClick={()=>handleDelete(id)} className='close'>
       <FaTimes color='purple' />

      </button>
     
     
      <button onClick={handleClick}>Click</button>
    </Card>
  )
}

export default FeedbackItem
