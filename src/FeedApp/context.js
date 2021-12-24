import React, { createContext, useState } from 'react';

import { data } from './FeedData';

import { v4 as uuidv4 } from 'uuid';

export const FeedContext = createContext(); // izvoz za komponente

const FeedProvider = ({ children }) => {
  const [dataFeed, setDataFeed] = useState(data);

  const [ratingStats, setRatingStats] = useState(0);

  const [text, setText] = useState('');

  const [selected, setSelected] = useState('');

  const [rating, setRating] = useState('');

  const [message, setMessage]=useState('')

  /*
  const addRating = (id, rating) => {
    let selectItem = dataFeed.filter((item) => item.id === id);

    setRatingStats(rating + 1);
  };

*/
  const deleteItem = (id) => {
    let delItem = dataFeed.filter((item) => item.id !== id);

    setDataFeed(delItem);
  };

  let numFeeds = dataFeed.length;

  let averageNum = dataFeed.reduce((total, amount) => {
    return (total + amount.rating) / numFeeds;
  }, 0);

  const handleChange = (e) => {
    setText(e.target.value);

    if(text.trim().length < 10){

      setMessage('Unesi vise od 10 slova')
    } else {

      setMessage('')
    }
  };

  const handleRating = (e) => {
    setRating(+e.target.value);
    setSelected(+e.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();

    let feedback = { text, rating };
    feedback.id = uuidv4();

    console.log(feedback);

    setDataFeed([...dataFeed, feedback]);

    setText('');
  };

  const editItem = (item) => {
    console.log(item);

    setText(item.text);
    setSelected(item.rating);
    setRating(item.rating);
  };

  return (
    <FeedContext.Provider
      value={{
        dataFeed,
        ratingStats,
        deleteItem,
        numFeeds,
        averageNum,
        text,
        setText,
        handleChange,
        addItem,
        selected,
        handleRating,
        editItem,
        message
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};

export { FeedProvider }; // izvoz za index.js
