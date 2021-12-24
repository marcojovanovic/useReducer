import React from 'react'


import { FeedbackContext } from './context';
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from './FeedbackItem';


function FeedbackList() {

  const { feedback} = React.useContext(FeedbackContext);


  return (
    <>
    <AnimatePresence>

      ({feedback.map(item=>{
       const {rating, text, id} = item
      return (
      <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
 
      <FeedbackItem id={id} rating={rating} text={text} item={item}/>

      </motion.div>

      )
    })}

    </AnimatePresence>
    

      

      


 
    
</>
  )
}

export default FeedbackList
