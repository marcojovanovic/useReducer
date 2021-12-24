import React from 'react'

import { FeedbackContext } from './context';


import Card from './shared/Card';
import {FaTimes, FaEdit } from 'react-icons/fa'

function FeedbackItem({rating, text, id, item}) {

  const {handleClick, handleDelete, editFeedback} = React.useContext(FeedbackContext);


  return (
    <Card>

       <div className='num-display'>{rating}</div>
       <div className='text-display'>{text}</div>
      <button onClick={()=>handleDelete(id)} className='close'>
       <FaTimes color='purple' />

      </button>
      <button onClick={()=>editFeedback(item)} color='purple' className='edit' >
        <FaEdit />
      </button>
     
      <button onClick={handleClick}>Click</button>
    </Card>
  )
}

export default FeedbackItem
