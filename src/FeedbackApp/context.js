import React, { createContext, useState, useEffect } from 'react';

import { data } from './FeedbackData';

export const FeedbackContext = createContext(); // izvoz za komponente

const FeedbackProvider = ({ children }) => {
 

  const [feedback, setFeedback] = useState(data);

  const [text, setText]=useState('')


  const handleTextChange = (e) =>{

    setText(e.target.value)


  }

  /*
  const handleClick = () => {
    setRating((prev) => {
      return prev + 1;
    });
  };

  */
  const handleDelete = (id) => {
    let delItem = feedback.filter((item) => item.id !== id);

    setFeedback(delItem);
  };


  // rating average 

  let average = feedback.reduce((acc, item)=>{

    return acc + item.rating / feedback.length

  },0)

  average = average.toFixed(1)

  return (
    <FeedbackContext.Provider
      value={{
       
        text,
        setText,
        feedback,
        handleDelete,
        average,
        handleTextChange
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export { FeedbackProvider };
