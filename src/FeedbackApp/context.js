import React, { createContext, useState, useEffect } from 'react';

import { data } from './FeedbackData';

import { v4 as uuidv4 } from 'uuid';

export const FeedbackContext = createContext(); // izvoz za komponente

const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(data);

  const [text, setText] = useState('');

  const [selected, setSelected] = useState(10);

  const [btnDisabled, setBtnDisabled] = useState(true);

  const [message, setMessage] = useState('');

  const [rating, setRating] = useState('');

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });

    console.log(item);
  };

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('text must be at least 10 character');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

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

  let average = feedback.reduce((acc, item) => {
    return acc + item.rating / feedback.length;
  }, 0);

  average = average.toFixed(1);

  const handleChange = (e) => {
    setSelected(+e.target.value);
    setRating(+e.target.value);
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
   

    setFeedback([newFeedback, ...feedback]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
    }
  };

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  // update

  const updateFeedback = (id, updItem) => {


    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        text,
        setText,
        feedback,
        handleDelete,
        average,
        handleTextChange,
        setBtnDisabled,
        btnDisabled,
        message,
        handleChange,
        selected,
        rating,
        setRating,
        handleSubmit,
        feedbackEdit,
        setFeedbackEdit,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export { FeedbackProvider };
