import React from 'react'


import { FeedbackContext } from './context';
import FeedbackItem from './FeedbackItem';
import Card from './shared/Card';

function FeedbackList() {

  const {rating, text, handleClick, feedback} = React.useContext(FeedbackContext);



  console.log(feedback)

  return (
    <>
     {feedback.map(item=>{
       const {rating, text, id} = item
      return <>
      
       <FeedbackItem id={id} rating={rating} text={text}/>
       
      </>

      

      


     })}
    
</>
  )
}

export default FeedbackList
